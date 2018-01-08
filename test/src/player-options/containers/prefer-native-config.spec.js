import PreferNativeConfig from '../../../../src/player-options/containers/prefer-native-config'

describe('PreferNativeConfig', () => {
  const hls = true;
  const dash = true;

  it('should create empty preferNative config', () => {
    const mdc = new PreferNativeConfig();
    mdc.should.be.instanceOf(PreferNativeConfig);
    mdc.hls.should.equal(false);
    mdc.dash.should.equal(false);
  });

  it('should create empty preferNative config and set other props later', () => {
    const mdc = new PreferNativeConfig();
    mdc.should.be.instanceOf(PreferNativeConfig);
    mdc.hls.should.equal(false);
    mdc.dash.should.equal(false);
    mdc.hls = hls;
    mdc.dash = dash;
    mdc.hls.should.equal(hls);
    mdc.dash.should.equal(dash);
  });

  it('should create preferNative config with initial poster and description', () => {
    const mdc = new PreferNativeConfig({hls: hls, dash: dash});
    mdc.should.be.instanceOf(PreferNativeConfig);
    mdc.hls.should.equal(hls);
    mdc.dash.should.equal(dash);
  });

  it('should get json preferNative config', () => {
    const json = {hls: hls, dash: dash};
    const mdc = new PreferNativeConfig(json);
    mdc.should.be.instanceOf(PreferNativeConfig);
    mdc.toJSON().should.deep.equal(json);
  });
});
