import PlayerOptions, {defaultPlayerOptions} from '../../../src/player-options/player-options'
import PlaybackConfig, {Preload} from '../../../src/player-options/containers/playback-config'
import SourcesConfig from '../../../src/player-options/containers/sources-config'
import MetadataConfig from '../../../src/player-options/containers/metadata-config'
import PluginsConfig from '../../../src/player-options/containers/plugins-config'

describe('PlayerOptions', () => {
  const plugins = {
    myPlugin: {myProp: 1}
  };
  const sources = {
    hls: [{mimetype: 'hls', url: 'hls'}],
    dash: [{mimetype: 'dash', url: 'dash'}],
    progressive: [{mimetype: 'progressive', url: 'progressive'}]
  };
  const metadata = {poster: 'poster', description: 'description'};
  const playback = {volume: 0.5, preferNative: {hls: true}};

  it('should create default player options', () => {
    const po = new PlayerOptions();
    po.should.be.instanceOf(PlayerOptions);
    po.logLevel.should.equal('ERROR');
    po.playback.should.be.instanceOf(PlaybackConfig);
    po.sources.should.be.instanceOf(SourcesConfig);
    po.metadata.should.be.instanceOf(MetadataConfig);
    po.plugins.should.be.instanceOf(Map);
    po._plugins.should.be.instanceOf(PluginsConfig);
    po.toJSON().should.deep.equal(defaultPlayerOptions);
  });

  it('should create default player options set other props later', () => {
    const po = new PlayerOptions();
    po.should.be.instanceOf(PlayerOptions);
    po.plugins = plugins;
    po.plugins.size.should.equal(1);
    po.plugins.get('myPlugin').should.exist;
    po.plugins.get('myPlugin').should.deep.equal(plugins.myPlugin);
    po.playback = playback;
    po.playback.volume.should.equal(0.5);
    po.playback.preferNative.hls.should.be.true;
    po.playback.preferNative.dash.should.be.false;
    po.playback.useNativeTextTrack.should.be.false;
    po.playback.playsinline.should.be.true;
    po.playback.preload.should.equal(Preload.NONE);
    po.playback.autoplay.should.be.false;
    po.playback.allowMutedAutoPlay.should.be.true;
    po.metadata = metadata;
    po.metadata.poster.should.equal('poster');
    po.metadata.description.should.equal('description');
    po.sources = sources;
    po.sources.dash.length.should.equal(1);
    po.sources.hls.length.should.equal(1);
    po.sources.progressive.length.should.equal(1);
    po.sources.dash[0].toJSON().should.deep.equal({mimetype: 'dash', url: 'dash'});
    po.sources.hls[0].toJSON().should.deep.equal({mimetype: 'hls', url: 'hls'});
    po.sources.progressive[0].toJSON().should.deep.equal({mimetype: 'progressive', url: 'progressive'});
  });

  it('should create player options by json', () => {
    const po = new PlayerOptions({
      plugins: plugins,
      playback: playback,
      sources: sources,
      metadata: metadata
    });
    po.should.be.instanceOf(PlayerOptions);
    po.plugins.size.should.equal(1);
    po.plugins.get('myPlugin').should.exist;
    po.plugins.get('myPlugin').should.deep.equal(plugins.myPlugin);
    po.playback.volume.should.equal(0.5);
    po.playback.preferNative.hls.should.be.true;
    po.playback.preferNative.dash.should.be.false;
    po.playback.useNativeTextTrack.should.be.false;
    po.playback.playsinline.should.be.true;
    po.playback.preload.should.equal(Preload.NONE);
    po.playback.autoplay.should.be.false;
    po.playback.allowMutedAutoPlay.should.be.true;
    po.metadata.poster.should.equal('poster');
    po.metadata.description.should.equal('description');
    po.sources.dash.length.should.equal(1);
    po.sources.hls.length.should.equal(1);
    po.sources.progressive.length.should.equal(1);
    po.sources.dash[0].toJSON().should.deep.equal({mimetype: 'dash', url: 'dash'});
    po.sources.hls[0].toJSON().should.deep.equal({mimetype: 'hls', url: 'hls'});
    po.sources.progressive[0].toJSON().should.deep.equal({mimetype: 'progressive', url: 'progressive'});
  });

  it('should get json player options', () => {
    const po = new PlayerOptions();
    po.should.be.instanceOf(PlayerOptions);
    po.toJSON().should.deep.equal(defaultPlayerOptions);
  });
});
