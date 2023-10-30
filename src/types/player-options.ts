import {PKLogConfigObject} from './log-level';
import {PKPlaybackConfigObject} from './playback-config';
import {PKStreamingConfigObject} from './streaming-config';
import {PKSessionConfigObject} from './session-config';
import {PKNetworkConfigObject} from './network-config';
import {PKCustomLabelsConfigObject} from './custom-labels-config';

export type PKPlayerOptionsObject = {
  log?: PKLogConfigObject,
  playback?: PKPlaybackConfigObject,
  streaming?: PKStreamingConfigObject,
  session?: PKSessionConfigObject,
  network?: PKNetworkConfigObject,
  customLabels?: PKCustomLabelsConfigObject
};
