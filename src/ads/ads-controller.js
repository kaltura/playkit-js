//@flow

import {AdsPlugin} from './ads-plugin';
import {AdEventType} from './ad-event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import FakeEvent from '../event/fake-event';
import {CustomEventType} from '../event/event-type';

class AdsController extends FakeEventTarget implements IAdsAPI {
  _adsPlugin: AdsPlugin;
  _allAdsCompleted: boolean;

  /**
   * The ads controller.
   * @param {Player} player - The player.
   * @param {AdsPlugin} adsPlugin - the current ad plugin instance.
   */
  constructor(player: Player, adsPlugin: AdsPlugin) {
    super();
    this._player = player;
    this._adsPlugin = adsPlugin;
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

  _onAdError(event): void {
    if (event.payload.fatal) {
      this._allAdsCompleted = true;
    }
  }
  _reset(): void {
    this._initMembers();
  }
}

export {AdsController};
