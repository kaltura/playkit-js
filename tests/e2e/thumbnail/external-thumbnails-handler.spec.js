import {expect} from 'chai';
import {ExternalThumbnailsHandler} from '../../../src/thumbnail/external-thumbnails-handler';
import Error from '../../../src/error/error';

let externalThumbnailsHandler;

const thumbnailsCues = [
  {startTime: 0, endTime: 5, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 0, y: 0}},
  {startTime: 5, endTime: 10, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 128, y: 0}},
  {startTime: 10, endTime: 15, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 256, y: 0}},
  {startTime: 15, endTime: 20, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 384, y: 0}},
  {startTime: 20, endTime: 25, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 512, y: 0}},
  {startTime: 25, endTime: 30, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 640, y: 0}},
  {startTime: 30, endTime: 35, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 768, y: 0}},
  {startTime: 35, endTime: 40, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 896, y: 0}},
  {startTime: 40, endTime: 45, imgUrl: '/base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 1024, y: 0}}
];

describe('ExternalThumbnailsHandler', () => {
  beforeEach(() => {
    externalThumbnailsHandler = new ExternalThumbnailsHandler();
  });

  describe('_downloadAndParseCues', () => {
    it('should download and parse the vtt file- vtt with url options only', async () => {
      await externalThumbnailsHandler._downloadAndParseCues({vttUrl: '/base/tests/assets/thumbnails1.vtt'});
      expect(externalThumbnailsHandler._cues.length).equal(6);
    });

    it('should download and parse the vtt file - vtt with size options only', async () => {
      await externalThumbnailsHandler._downloadAndParseCues({vttUrl: '/base/tests/assets/thumbnails2.vtt'});
      expect(externalThumbnailsHandler._cues.length).equal(5);
    });

    it('should download and parse the vtt file - vtt with size and coords options', async () => {
      await externalThumbnailsHandler._downloadAndParseCues({vttUrl: '/base/tests/assets/thumbnails3.vtt'});
      expect(externalThumbnailsHandler._cues.length).equal(9);
    });
  });

  describe('_formatIntoThumbnailCues', () => {
    let time = 0;
    let x = -128;
    const nativeVttCues = [...thumbnailsCues].map(() => {
      return new VTTCue(time, (time += 5), `bbb-sprite.jpeg#xywh=${(x += 128)},0,128,72`);
    });
    const thumbnailsConfig = {
      vttUrl: '/base/tests/assets/thumbnails3.vtt'
    };

    it('should turn native vtt cues into thumbnails cues - valid cues', async () => {
      const parsedCues = await externalThumbnailsHandler._formatIntoThumbnailCues(nativeVttCues, thumbnailsConfig);
      expect(parsedCues).deep.equal(thumbnailsCues);
    });

    it('should throw an error - invalid cues', async () => {
      const invalidVttFormat = new Array(9).fill('nothing');
      await expect(externalThumbnailsHandler._formatIntoThumbnailCues(invalidVttFormat, thumbnailsConfig)).to.be.rejectedWith(new Error());
      expect(externalThumbnailsHandler._cues.length).equal(0);
    });

    it('should throw an error - invalid url option', async () => {
      const invalidVttCues = [
        {startTime: 0, endTime: 5, imgUrl: 'base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 0, y: 0}},
        {startTime: 5, endTime: 10, imgUrl: 'base/tests/assets/bbb-sprite.jpeg', size: {width: 128, height: 72}, coordinates: {x: 128, y: 0}}
      ];
      await expect(externalThumbnailsHandler._formatIntoThumbnailCues(invalidVttCues, thumbnailsConfig)).to.be.rejectedWith(new Error());
      expect(externalThumbnailsHandler._cues.length).equal(0);
    });
  });

  describe('_extractCueMetadata', () => {
    const thumbnailsConfig = {
      vttUrl: '/base/tests/assets/thumbnails3.vtt'
    };

    it('should turn a vtt cue into a thumbnail cue - vtt cue with size and coords options', async () => {
      const nativeVTTCue = new VTTCue(0, 5, 'bbb-sprite.jpeg#xywh=0,0,128,72');
      const actualParsedCue = await externalThumbnailsHandler._extractCueMetadata(nativeVTTCue, thumbnailsConfig);
      const expectedParsedCue = {
        startTime: 0,
        endTime: 5,
        imgUrl: '/base/tests/assets/bbb-sprite.jpeg',
        size: {width: 128, height: 72},
        coordinates: {x: 0, y: 0}
      };
      expect(actualParsedCue).deep.equal(expectedParsedCue);
    });

    it('should turn a vtt cue into a thumbnail cue - vtt cue with size options only - (the size options should be ignored) and size and coordinates should be null', async () => {
      const nativeVTTCue = new VTTCue(0, 5, 'bbb-sprite.jpeg#wh=128,72');
      const actualParsedCue = await externalThumbnailsHandler._extractCueMetadata(nativeVTTCue, thumbnailsConfig);
      const expectedParsedCue = {
        startTime: 0,
        endTime: 5,
        imgUrl: '/base/tests/assets/bbb-sprite.jpeg',
        size: null,
        coordinates: null
      };
      expect(actualParsedCue).deep.equal(expectedParsedCue);
    });

    it('should turn a vtt cue into a thumbnail cue - vtt cue with url options only - the size options should be should be null', async () => {
      const nativeVTTCue = new VTTCue(0, 5, 'bbb-sprite.jpeg#wh=128,72');
      const actualParsedCue = await externalThumbnailsHandler._extractCueMetadata(nativeVTTCue, thumbnailsConfig);
      const expectedParsedCue = {
        startTime: 0,
        endTime: 5,
        imgUrl: '/base/tests/assets/bbb-sprite.jpeg',
        size: null,
        coordinates: null
      };
      expect(actualParsedCue).deep.equal(expectedParsedCue);
    });

    it('should throw an error - invalid thumbnail cue format', () => {
      const invalidVttThumbnailFormat = new VTTCue(0, 5, 'bbb-sprite.jpeg#xywh=0,128,72');
      expect(() => externalThumbnailsHandler._extractCueMetadata(invalidVttThumbnailFormat, thumbnailsConfig)).to.throw();
    });
  });

  describe('_findCue', () => {
    it('should find the correct cue - which is the sixth one', () => {
      const cue = externalThumbnailsHandler._findCue(25, thumbnailsCues);
      expect(cue).deep.equal(thumbnailsCues[5]);
    });

    it('should find the correct cue - which is the first one', () => {
      const cue = externalThumbnailsHandler._findCue(4, thumbnailsCues);
      expect(cue).deep.equal(thumbnailsCues[0]);
    });

    it('should find the correct cue - which is the last one', () => {
      const cue = externalThumbnailsHandler._findCue(43, thumbnailsCues);
      expect(cue).deep.equal(thumbnailsCues[8]);
    });

    it('should return null - the cue dose not exist', () => {
      const cue = externalThumbnailsHandler._findCue(55, thumbnailsCues);
      expect(cue).to.be.null;
    });
  });
});
