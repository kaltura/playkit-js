import {ExternalThumbnailsHandler} from '../../../src/thumbnail/external-thumbnails-handler';

let externalThumbnailsHandler;

describe('ExternalThumbnailsHandler', () => {

  before(() => {
    externalThumbnailsHandler = new ExternalThumbnailsHandler();
  });

  describe('_downloadAndParseCues', () => {
    const thumbnailsConfig: PKExternalThumbnailsConfig = {
      vttUrl: '/base/test/src/assets/thumbnails3.vtt'
    };

    it('should download and parse the vtt file', async () => {
      await externalThumbnailsHandler._downloadAndParseCues(thumbnailsConfig);
      externalThumbnailsHandler._cues.length.should.equal(9);
    });
  });
});
