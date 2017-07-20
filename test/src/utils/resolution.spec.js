import {getSuitableSourceForResolution} from '../../../src/utils/resolution'

describe('getSuitableSourceForResolution', () => {
  let tracks = [
    {
      width: 100
    },
    {
      width: 200,
      height: 100
    },
    {
      width: 400,
      height: 400,
      bandwidth: 20000
    },
    {
      width: 800,
      height: 400
    },
    {
      width: 800,
      height: 800,
      bandwidth: 10000
    },
    {
      width: 800,
      height: 800,
      bandwidth: 20000
    }
  ];

  it('should not select for no params given', () => {
    (getSuitableSourceForResolution() === null).should.be.true;
  });

  it('should not select for no height given', () => {
    (getSuitableSourceForResolution(tracks, 100, 0) === null).should.be.true;
  });

  it('should not select for no tracks given', () => {
    (getSuitableSourceForResolution(null, 100, 100) === null).should.be.true;
  });

  it('should not select for empty tracks given', () => {
    (getSuitableSourceForResolution([], 100, 100) === null).should.be.true;
  });

  it('should select according width', () => {
    (getSuitableSourceForResolution(tracks, 210, 210) === tracks[1]).should.be.true;
    (getSuitableSourceForResolution(tracks, 190, 190) === tracks[1]).should.be.true;
    (getSuitableSourceForResolution(tracks, 100, 100) === tracks[0]).should.be.true;
  });

  it('should select according ratio', () => {
    (getSuitableSourceForResolution(tracks, 800, 500) === tracks[3]).should.be.true;
    (getSuitableSourceForResolution(tracks, 800, 300) === tracks[3]).should.be.true;
  });

  it('should select according bandwidth', () => {
    (getSuitableSourceForResolution(tracks, 800, 700) === tracks[5]).should.be.true;
    (getSuitableSourceForResolution(tracks, 800, 900) === tracks[5]).should.be.true;
  });
});
