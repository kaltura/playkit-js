//@flow
import Player from '../player';
import {AdEventType} from './ad-event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import FakeEvent from '../event/fake-event';
import {CustomEventType} from '../event/event-type';
import Error from '../error/error';

class AdsController extends FakeEventTarget implements IAdsController {
  _player: Player;
  _adsPluginController: IAdsController;
  _allAdsCompleted: boolean;
  _eventManager: EventManager;

  /**
   * The ads controller.
   * @param {Player} player - The player.
   * @param {IAdsController} adsPluginController - the controller of the current plugin instance.
   */
  constructor(player: Player, adsPluginController: IAdsController) {
    super();
    this._player = player;
    this._adsPluginController = adsPluginController;
    this._initMembers();
    this._addBindings();
  }

  /**
   * Getter to the no more ads to play indication.
   * @returns {boolean} - Whether all ads completed.
   */
  get allAdsCompleted(): boolean {
    return this._allAdsCompleted;
  }

  /**
   * Skip on an ad.
   * @public
   * @returns {void}
   */
  skipAd(): void {
    this._adsPluginController.skipAd();
  }

  /**
   * Play an ad on demand.
   * @param {string} adTagUrl - The ad tag url to play.
   * @public
   * @returns {void}
   */
  playAdNow(adTagUrl: string): void {
    this._adsPluginController.playAdNow(adTagUrl);
  }

  _initMembers(): void {
    this._allAdsCompleted = true;
  }

  _addBindings(): void {
    this._eventManager = new EventManager();
    this._eventManager.listen(this._player, AdEventType.AD_MANIFEST_LOADED, () => this._onAdManifestLoaded());
    this._eventManager.listen(this._player, AdEventType.ALL_ADS_COMPLETED, event => this._onAllAdsCompleted(event));
    this._eventManager.listen(this._player, AdEventType.AD_ERROR, event => this._onAdError(event));
    this._eventManager.listen(this._player, CustomEventType.PLAYER_RESET, () => this._reset());
  }

  _onAdManifestLoaded(): void {
    this._allAdsCompleted = false;
  }

  _onAllAdsCompleted(event: FakeEvent): void {
    this._allAdsCompleted = true;
    this.dispatchEvent(event);
  }

  _onAdError(event: FakeEvent): void {
    if (event.payload.severity === Error.Severity.CRITICAL) {
      this._allAdsCompleted = true;
    }
  }

  _reset(): void {
    this._initMembers();
  }
}

export {AdsController};
