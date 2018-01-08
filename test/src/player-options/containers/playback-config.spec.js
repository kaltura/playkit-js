import PlaybackConfig from '../../../../src/player-options/containers/playback-config'
import {Preload, defaultPlaybackConfigObject} from '../../../../src/player-options/containers/playback-config'
import StreamPriorityList from '../../../../src/player-options/lists/stream-priority-list'
import PreferNativeConfig from '../../../../src/player-options/containers/prefer-native-config'
import {EngineName, FormatName} from '../../../../src/player-options/items/stream-priority'

describe('PlaybackConfig', () => {
  const engine = 'engine';
  const format = 'format';

  it('should create empty playback config', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.audioLanguage.should.equal('');
    pc.textLanguage.should.equal('');
    pc.useNativeTextTrack.should.be.false;
    pc.volume.should.equal(1);
    pc.playsinline.should.be.true;
    pc.preload.should.equal(Preload.NONE);
    pc.autoplay.should.be.false;
    pc.allowMutedAutoPlay.should.be.true;
    pc._streamPriority.should.be.instanceOf(StreamPriorityList);
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(3);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.HLS});
    pc.streamPriority[1].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.DASH});
    pc.streamPriority[2].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.PROGRESSIVE});
    pc.preferNative.should.be.instanceOf(PreferNativeConfig);
    pc.preferNative.dash.should.be.false;
    pc.preferNative.hls.should.be.false;
  });

  it('should create empty playback config and set other props later', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.audioLanguage = 'heb';
    pc.textLanguage = 'eng';
    pc.playsinline = false;
    pc.useNativeTextTrack = true;
    pc.volume = 0;
    pc.preload = Preload.AUTO;
    pc.autoplay = true;
    pc.allowMutedAutoPlay = false;
    pc.audioLanguage.should.equal('heb');
    pc.textLanguage.should.equal('eng');
    pc.useNativeTextTrack.should.be.true;
    pc.volume.should.equal(0);
    pc.playsinline.should.be.false;
    pc.preload.should.equal(Preload.AUTO);
    pc.autoplay.should.be.true;
    pc.allowMutedAutoPlay.should.be.false;
  });

  it('should create empty playback config and set new stream priority list as class', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(3);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.HLS});
    pc.streamPriority[1].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.DASH});
    pc.streamPriority[2].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.PROGRESSIVE});
    pc.streamPriority = new StreamPriorityList([{engine: engine, format: format}]);
    pc._streamPriority.should.be.instanceOf(StreamPriorityList);
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(1);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: engine, format: format});
  });

  it('should create empty playback config and set new stream priority list as object', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(3);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.HLS});
    pc.streamPriority[1].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.DASH});
    pc.streamPriority[2].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.PROGRESSIVE});
    pc.streamPriority = [{engine: engine, format: format}];
    pc._streamPriority.should.be.instanceOf(StreamPriorityList);
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(1);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: engine, format: format});
  });

  it('should create empty playback config and set prefer native config as class', () => {
    const pnc = new PreferNativeConfig({hls: true, dash: true});
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.preferNative.should.be.instanceOf(PreferNativeConfig);
    pc.preferNative.dash.should.be.false;
    pc.preferNative.hls.should.be.false;
    pc.preferNative = pnc;
    pc.preferNative.should.be.instanceOf(PreferNativeConfig);
    pc.preferNative.dash.should.be.true;
    pc.preferNative.hls.should.be.true;
  });

  it('should create empty playback config and set prefer native config as object', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.preferNative.should.be.instanceOf(PreferNativeConfig);
    pc.preferNative.dash.should.be.false;
    pc.preferNative.hls.should.be.false;
    pc.preferNative = {hls: true, dash: true};
    pc.preferNative.should.be.instanceOf(PreferNativeConfig);
    pc.preferNative.dash.should.be.true;
    pc.preferNative.hls.should.be.true;
  });

  it('should create playback config by json', () => {
    const pcObj = {
      audioLanguage: 'heb',
      textLanguage: 'eng',
      playsinline: false,
      useNativeTextTrack: true,
      volume: 0,
      preload: Preload.AUTO,
      autoplay: true,
      allowMutedAutoPlay: false,
      preferNative: {
        hls: true,
        dash: false
      },
      streamPriority: [{
        engine: EngineName.HTML5,
        format: FormatName.DASH
      }, {
        engine: EngineName.HTML5,
        format: FormatName.HLS
      }]
    };
    const pc = new PlaybackConfig(pcObj);
    pc.should.be.instanceOf(PlaybackConfig);
    pc.audioLanguage.should.equal('heb');
    pc.textLanguage.should.equal('eng');
    pc.useNativeTextTrack.should.be.true;
    pc.volume.should.equal(0);
    pc.playsinline.should.be.false;
    pc.preload.should.equal(Preload.AUTO);
    pc.autoplay.should.be.true;
    pc.preferNative.hls.should.be.true;
    pc.preferNative.dash.should.be.false;
    pc.allowMutedAutoPlay.should.be.false;
    pc.streamPriority.should.be.an('array');
    pc.streamPriority.length.should.equal(2);
    pc.streamPriority[0].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.DASH});
    pc.streamPriority[1].toJSON().should.deep.equal({engine: EngineName.HTML5, format: FormatName.HLS});
  });

  it('should get json playback config', () => {
    const pc = new PlaybackConfig();
    pc.should.be.instanceOf(PlaybackConfig);
    pc.toJSON().should.deep.equal(defaultPlaybackConfigObject);
  });
});
