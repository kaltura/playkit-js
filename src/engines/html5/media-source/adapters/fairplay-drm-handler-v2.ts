import Error from '../../../../error/error';
import { EventManager, ListenerType } from '../../../../event/event-manager';
import { FairPlayDrmConfigType, FairPlayDrmHandler } from './fairplay-drm-handler';
import getLogger from '../../../../utils/logger';
import { DrmScheme } from '../../../../drm/drm-scheme';
import { PKDrmDataObject } from '../../../../types';

enum EME_EVENTS {
  ENCRYPTED = 'encrypted'
}

const KEY_SYSTEM = 'com.apple.fps';

class FairPlayDrmHandlerV2 {
  private eventManager: EventManager;
  private logger = getLogger('FairPlayDrmHandlerV2');
  private keySession: any;

  constructor(
    private videoElement: HTMLVideoElement,
    private config: FairPlayDrmConfigType,
    private errorCallback: (...args: any[]) => any,
    private drmResponseCallback: (...args: any[]) => any
  ) {
    this.eventManager = new EventManager();
    this.eventManager.listen(videoElement, EME_EVENTS.ENCRYPTED, this.onEncrypted.bind(this) as ListenerType);
  }

  private async onEncrypted(event: MediaEncryptedEvent) {
    let initDataType = event.initDataType;
    if (initDataType !== 'skd') {
      this.logger.warn(`Received unexpected initialization data type "${initDataType}"`);
      return;
    }

    if (!this.videoElement.mediaKeys) {
      // TODO does this need to be configurable ?
      let supportedConfigurations = [
        {
          initDataTypes: [initDataType],
          videoCapabilities: [{ contentType: 'application/vnd.apple.mpegurl', robustness: '' }],
          distinctiveIdentifier: 'not-allowed' as MediaKeysRequirement,
          persistentState: 'not-allowed' as MediaKeysRequirement,
          sessionTypes: ['temporary']
        }
      ];

      try {
        let access = await navigator.requestMediaKeySystemAccess(KEY_SYSTEM, supportedConfigurations);
        let keys = await access.createMediaKeys();

        await keys.setServerCertificate(FairPlayDrmHandler._base64DecodeUint8Array(this.config.certificate));
        await this.videoElement.setMediaKeys(keys);

        this.keySession = this.videoElement.mediaKeys!.createSession();

        if (!this.keySession) {
          this.onError(Error.Code.COULD_NOT_CREATE_KEY_SESSION);
        }

        this.keySession.generateRequest(initDataType, event.initData!);

        const message: any = await new Promise((resolve, reject) => {
          this.eventManager.listenOnce(this.keySession, 'message', (event: MediaKeyMessageEvent) => {
            resolve(event.message);
          });

          // TODO
          setTimeout(reject, 1000);
        });

        if (!message) {
          // TODO
          return;
        }

        const response = await FairPlayDrmHandlerV2.getUDRMResponse(this.config.licenseUrl, message);
        if (response.ckc === '') return;
        // TODO throw an error and / or add logs

        await this.keySession.update(FairPlayDrmHandlerV2.base64DecodeUint8Array(response.ckc));
      } catch (e) {
        this.logger.error('Failed to request MediaKeySystemAccess:', e);
        // TODO
        return;
      }
    }
  }

  private static base64DecodeUint8Array(base64String: string): Uint8Array {
    return Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0));
  }

  private static getUDRMResponse(url, data): Promise<any> {
    return fetch(url, {
      method: 'POST',
      body: (new Uint8Array(data) as any).toBase64(),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json());
  }

  private onError(code: number, data?: any): void {
    this.errorCallback(new Error(Error.Severity.CRITICAL, Error.Category.DRM, code, data));
  }

  public getDrmInfo(): PKDrmDataObject {
    const { certificate, licenseUrl } = this.config;
    return { certificate, licenseUrl, scheme: DrmScheme.FAIRPLAY };
  }

  public destroy(): void {
    this.eventManager.destroy();
    this.keySession.close();
    this.keySession = null;
  }
}

export { FairPlayDrmHandlerV2 };
