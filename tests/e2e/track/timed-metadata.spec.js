import {TimedMetadata, createTextTrackCue, createTimedMetadata} from '../../../src/track/timed-metadata';

describe('TimedMetadata', () => {
  const info = {info: 'info'};
  const params = {
    startTime: 10,
    endTime: 20,
    id: 'id',
    type: 'type',
    metadata: info
  };
  describe('createTextTrackCue', () => {
    const {startTime, endTime, id, type, metadata} = params;
    const timedMetadata = new TimedMetadata(startTime, endTime, id, type, metadata);

    it('should create TextTrackCue based on TimedMetadata', () => {
      const vttCue = createTextTrackCue(timedMetadata);
      (vttCue instanceof window.VTTCue).should.be.true;
      vttCue.startTime.should.equal(startTime);
      vttCue.endTime.should.equal(endTime);
      vttCue.id.should.equal(id);
      vttCue.value.key.should.equal(type);
      vttCue.value.data.should.equal(metadata);
    });

    it('should return null for null given', () => {
      const vttCue = createTextTrackCue(null);
      (vttCue === null).should.be.true;
    });

    it('should return null for empty object given', () => {
      const vttCue = createTextTrackCue({});
      (vttCue === null).should.be.true;
    });
  });

  describe('createTimedMetadata', () => {
    const {startTime, endTime, id, type, metadata} = params;
    const timedMetadata = new TimedMetadata(startTime, endTime, id, type, metadata);
    const vttCue = createTextTrackCue(timedMetadata);

    it('should create TimedMetadata based on TextTrackCue', () => {
      const newTimedMetadata = createTimedMetadata(vttCue);
      (newTimedMetadata instanceof TimedMetadata).should.be.true;
      newTimedMetadata.should.be.deep.equal({...timedMetadata, type: TimedMetadata.TYPE.CUSTOM});
    });

    it('should create TimedMetadata based on id3 tag', () => {
      const id3 = createTextTrackCue(timedMetadata);
      id3.type = 'org.id3';
      const newTimedMetadata = createTimedMetadata(id3);
      (newTimedMetadata instanceof TimedMetadata).should.be.true;
      newTimedMetadata.should.be.deep.equal({...timedMetadata, metadata: {key: type, data: info}, type: TimedMetadata.TYPE.ID3});
    });

    it('should create TimedMetadata based cue with no value.data', () => {
      const cue = new window.VTTCue(startTime, endTime, '');
      cue.id = id;
      cue.value = {key: type, ...info};
      const newTimedMetadata = createTimedMetadata(cue);
      (newTimedMetadata instanceof TimedMetadata).should.be.true;
      newTimedMetadata.should.be.deep.equal({...timedMetadata, metadata: cue.value, type: TimedMetadata.TYPE.CUSTOM});
    });

    it('should return null for null given', () => {
      const newTimedMetadata = createTimedMetadata(null);
      (newTimedMetadata === null).should.be.true;
    });

    it('should return null for empty object given', () => {
      const newTimedMetadata = createTimedMetadata({});
      (newTimedMetadata === null).should.be.true;
    });
  });
});
