// @flow
import type{PlaybackConfigObject} from './containers/playback-config'
import PlaybackConfig from './containers/playback-config'
import SourcesConfig from './containers/sources-config'
import type {SourcesConfigObject} from './containers/sources-config'
import MetadataConfig from './containers/metadata-config'
import type {MetadataConfigObject} from './containers/metadata-config'
import PluginsConfig from './containers/plugins-config'
import type {PluginsConfigObject} from './containers/plugins-config'

export type PlayerOptionsObject = {
  playback: PlaybackConfigObject,
  sources: SourcesConfigObject,
  metadata: MetadataConfigObject,
  plugins: PluginsConfigObject
};

export default class PlayerOptions {
  _playback: PlaybackConfig;
  _sources: SourcesConfig;
  _metadata: MetadataConfig;
  _plugins: PluginsConfig;

  get playback(): PlaybackConfig {
    return this._playback;
  }

  set playback(config: PlaybackConfigObject): void {
    if (config.audioLanguage) this.playback.audioLanguage = config.audioLanguage;
    if (config.textLanguage) this.playback.textLanguage = config.textLanguage;
    if (config.volume) this.playback.volume = config.volume;
    if (config.playsinline) this.playback.playsinline = config.playsinline;
    if (config.preload) this.playback.preload = config.preload;
    if (config.autoplay) this.playback.autoplay = config.autoplay;
    if (config.allowMutedAutoPlay) this.playback.allowMutedAutoPlay = config.allowMutedAutoPlay;
    if (config.muted) this.playback.muted = config.muted;
    if (config.streamPriority) this.playback.streamPriority = config.streamPriority;
  }

  get sources(): SourcesConfig {
    return this._sources;
  }

  set sources(config: SourcesConfigObject): void {
    if (config.hls) this.sources.hls = config.hls;
    if (config.dash) this.sources.dash = config.dash;
    if (config.progressive) this.sources.progressive = config.progressive;
  }

  get metadata(): MetadataConfig {
    return this._metadata;
  }

  set metadata(config: MetadataConfigObject): void {
    if (config.poster) this.metadata.poster = config.poster;
    if (config.description) this.metadata.description = config.description;
  }

  get plugins(): Map<string, Object> {
    return this._plugins.map;
  }

  set plugins(config: Map<string, Object> | PluginsConfigObject): void {
    this._plugins.map = config;
  }

  constructor(config?: PlayerOptionsObject) {
    this._playback = new PlaybackConfig(config && config.playback);
    this._sources = new SourcesConfig(config && config.sources);
    this._metadata = new MetadataConfig(config && config.metadata);
    this._plugins = new PluginsConfig(config && config.plugins);
  }

  toJSON(): PlayerOptionsObject {
    return {
      playback: this._playback.toJSON(),
      sources: this._sources.toJSON(),
      metadata: this._metadata.toJSON(),
      plugins: this._plugins.toJSON()
    };
  }
}
