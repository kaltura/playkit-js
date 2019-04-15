//@flow
import Player from '../player';
import {AdEventType} from './ad-event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import FakeEvent from '../event/fake-event';
import {CustomEventType, Html5EventType} from '../event/event-type';
import Error from '../error/error';
import {AdBreak} from './ad-break';
import {Ad} from './ad';

/**
 * @class AdsController
 * @param {Player} player - The player.
 * @param {IAdsController} adsPluginController - The controller of the current ads plugin instance.
 */
class AdsController extends FakeEventTarget implements IAdsController {
  _player: Player;
  _adsPluginController: IAdsController;
  _allAdsCompleted: boolean;
  _eventManager: EventManager;
  _adBreaksLayout: Array<number>;
  _adBreak: ?AdBreak;
  _ad: ?Ad;

  constructor(player: Player, adsPluginController: IAdsController) {
    super();
    this._player = player;
    this._adsPluginController = adsPluginController;
    this._initMembers();
    this._addBindings();
  }

  /**
   * @instance
   * @memberof AdsController
   * @returns {boolean} - Whether all ads completed.
   */
  get allAdsCompleted(): boolean {
    return this._allAdsCompleted;
  }

  /**
   * @instance
   * @memberof AdsController
   * @returns {boolean} - Whether we're in an ad break.
   */
  isAdBreak(): boolean {
    return !!this._adBreak;
  }

  /**
   * @instance
   * @memberof AdsController
   * @returns {Array<number>} - The ad breaks layout (cue points).
   */
  getAdBreaksLayout(): Array<number> {
    return this._adBreaksLayout;
  }

  /**
   * @instance
   * @memberof AdsController
   * @returns {?AdBreak} - Gets the current ad break data.
   */
  getAdBreak(): ?AdBreak {
    return this._adBreak;
  }

  /**
   * @instance
   * @memberof AdsController
   * @returns {?Ad} - Gets the current ad data.
   */
  getAd(): ?Ad {
    return this._ad;
  }

  /**
   * Skip on an ad.
   * @instance
   * @memberof AdsController
   * @returns {void}
   */
  skipAd(): void {
    this._adsPluginController.skipAd();
  }

  /**
   * Play an ad on demand.
   * @param {string} adTagUrl - The ad tag url to play.
   * @instance
   * @memberof AdsController
   * @returns {void}
   */
  playAdNow(adTagUrl: string): void {
    this._adsPluginController.playAdNow(adTagUrl);
  }

  _initMembers(): void {
    this._allAdsCompleted = true;
    this._adBreaksLayout = [];
    this._adBreak = null;
    this._ad = null;
  }

  _addBindings(): void {
    this._eventManager = new EventManager();
    this._eventManager.listen(this._player, AdEventType.AD_MANIFEST_LOADED, event => this._onAdManifestLoaded(event));
    this._eventManager.listen(this._player, AdEventType.AD_BREAK_START, event => this._onAdBreakStart(event));
    this._eventManager.listen(this._player, AdEventType.AD_LOADED, event => this._onAdLoaded(event));
    this._eventManager.listen(this._player, AdEventType.AD_BREAK_END, () => this._onAdBreakEnd());
    this._eventManager.listen(this._player, AdEventType.ALL_ADS_COMPLETED, event => this._onAllAdsCompleted(event));
    this._eventManager.listen(this._player, AdEventType.AD_ERROR, event => this._onAdError(event));
    this._eventManager.listen(this._player, CustomEventType.PLAYER_RESET, () => this._reset());
    this._eventManager.listen(this._player, Html5EventType.ENDED, () => this._onEnded());
  }

  _onAdManifestLoaded(event: FakeEvent): void {
    this._adBreaksLayout = event.payload.adBreaksPosition;
    this._allAdsCompleted = false;
  }

  _onAdBreakStart(event: FakeEvent): void {
    this._adBreak = event.payload.adBreak;
    this.dispatchEvent(event);
  }

  _onAdLoaded(event: FakeEvent): void {
    this._ad = event.payload.ad;
  }

  _onAdBreakEnd(): void {
    this._adBreak = null;
    this._ad = null;
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

  _onEnded(): void {
    if (!this._allAdsCompleted && !this._adBreaksLayout.includes(-1)) {
      this._allAdsCompleted = true;
    }
  }

  _reset(): void {
    this._initMembers();
  }
}

export {AdsController};
