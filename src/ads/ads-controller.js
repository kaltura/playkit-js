//@flow
import Player from '../player';
import {AdEventType} from './ad-event-type';
import EventManager from '../event/event-manager';
import FakeEvent from '../event/fake-event';
import {CustomEventType} from '../event/event-type';
import Error from '../error/error';

class AdsController implements IAdsController {
  _player: Player;
  _adsPluginController: IAdsController;
  _hasPostRoll: boolean;
  _eventManager: EventManager;

  /**
   * The ads controller.
   * @param {Player} player - The player.
   * @param {IAdsController} adsPluginController - the controller of the current plugin instance.
   */
  constructor(player: Player, adsPluginController: IAdsController) {
    this._player = player;
    this._adsPluginController = adsPluginController;
    this._initMembers();
    this._addBindings();
  }

  /**
   * Getter whether there is a post roll
   * @returns {boolean} - there is a post roll.
   */
  get hasPostRoll(): boolean {
    return this._hasPostRoll;
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
    this._hasPostRoll = false;
  }

  _addBindings(): void {
    this._eventManager = new EventManager();
    this._eventManager.listen(this._player, AdEventType.AD_MANIFEST_LOADED, event => this._onAdManifestLoaded(event));
    this._eventManager.listen(this._player, AdEventType.AD_ERROR, event => this._onAdError(event));
    this._eventManager.listen(this._player, CustomEventType.PLAYER_RESET, () => this._reset());
  }

  _onAdManifestLoaded(event: FakeEvent): void {
    this._hasPostRoll = event.payload.adBreaksPosition.includes(-1);
  }

  _onAdError(event: FakeEvent): void {
    if (event.payload.severity === Error.Severity.CRITICAL) {
      this._hasPostRoll = false;
    }
  }

  _reset(): void {
    this._initMembers();
  }
}

export {AdsController};
