// @flow
import type {PlaybackConfigObject} from './containers/playback-config'
import PlaybackConfig, {defaultPlaybackConfigObject} from './containers/playback-config'
import SourcesConfig, {defaultSourcesConfigObject} from './containers/sources-config'
import type {SourcesConfigObject} from './containers/sources-config'
import MetadataConfig, {defaultMetadataConfigObject} from './containers/metadata-config'
import type {MetadataConfigObject} from './containers/metadata-config'
import PluginsConfig, {defaultPluginsConfigObject} from './containers/plugins-config'
import type {PluginsConfigObject} from './containers/plugins-config'
import {LogLevel} from '../utils/logger'

export type PlayerOptionsObject = {
  logLevel: string,
  playback: PlaybackConfigObject,
  sources: SourcesConfigObject,
  metadata: MetadataConfigObject,
  plugins: PluginsConfigObject
};

export const defaultPlayerOptions: PlayerOptionsObject = {
  logLevel: 'ERROR',
  playback: defaultPlaybackConfigObject,
  sources: defaultSourcesConfigObject,
  metadata: defaultMetadataConfigObject,
  plugins: defaultPluginsConfigObject
};

export default class PlayerOptions {
  _logLevel: string;
  _playback: PlaybackConfig;
  _sources: SourcesConfig;
  _metadata: MetadataConfig;
  _plugins: PluginsConfig;

  get logLevel(): string {
    return this._logLevel;
  }

  set logLevel(value: string): void {
    if (typeof value === 'string' && LogLevel[value]) {
      this._logLevel = value;
    }
  }

  get playback(): PlaybackConfig {
    return this._playback;
  }

  set playback(config: PlaybackConfigObject): void {
    this._playback = new PlaybackConfig(config);
  }

  get sources(): SourcesConfig {
    return this._sources;
  }

  set sources(config: SourcesConfigObject): void {
    this._sources = new SourcesConfig(config);
  }

  get metadata(): MetadataConfig {
    return this._metadata;
  }

  set metadata(config: MetadataConfigObject): void {
    this._metadata = new MetadataConfig(config);
  }

  get plugins(): Map<string, Object> {
    return this._plugins.map;
  }

  set plugins(config: Map<string, Object> | PluginsConfigObject): void {
    this._plugins.map = config;
  }

  constructor(config: PlayerOptionsObject = defaultPlayerOptions) {
    this._playback = new PlaybackConfig(config.playback);
    this._sources = new SourcesConfig(config.sources);
    this._metadata = new MetadataConfig(config.metadata);
    this._plugins = new PluginsConfig(config.plugins);
    this._logLevel = config.logLevel;
  }

  toJSON(): PlayerOptionsObject {
    return {
      logLevel: this._logLevel,
      playback: this._playback.toJSON(),
      sources: this._sources.toJSON(),
      metadata: this._metadata.toJSON(),
      plugins: this._plugins.toJSON()
    };
  }
}
