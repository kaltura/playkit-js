import {ExternalCaptionsHandler} from '../../../src/track/external-captions-handler'
import Player from '../../../src/player'
import TextTrack from '../../../src/track/text-track'
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from "../utils/test-utils";
import {Object} from "../../../src/utils/util";
import SourcesConfig from '../configs/sources.json'
import {CustomEventType, Html5EventType} from '../../../src/event/event-type'
import FakeEvent from '../../../src/event/fake-event'

const targetId = 'player-placeholder_player.spec';
let sourcesConfig = Object.copyDeep(SourcesConfig);

describe('ExternalCaptionsHandler', () => {
  describe('_getCuesString', () => {
    let config, player, playerContainer, externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should load a vtt file (type specified)", (done) => {
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/en.vtt',
        type: 'vtt',
        cues: []
      };
      externalCaptionsHandler._getCuesString(new TextTrack({language: 'en'})).then(()=> {
        done();
      });
    });

    it("should load a vtt file (type not specified)", (done) => {
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/en.vtt',
        cues: []
      };
      externalCaptionsHandler._getCuesString(new TextTrack({language: 'en'})).then(()=> {
        done();
      });
    });

    it("should throw a reject when loading vtt file", (done) => {
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/doesnotexist.vtt',
        type: 'vtt',
        cues: []
      };
      externalCaptionsHandler._getCuesString(new TextTrack({language: 'en'})).then(()=> {
        // do nothing
      }).catch(()=>{
        done();
      });
    });

    it("should throw a reject when loading not a vtt file", (done) => {
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/en.notvtt',
        type: 'notvtt',
        cues: []
      };
      externalCaptionsHandler._getCuesString(new TextTrack({language: 'en'})).then(()=> {
        // do nothing
      }).catch(()=>{
        done();
      });
    });
  });


  describe('_parseCues', () => {
    let config, player, playerContainer, externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should load and parse a vtt cue string", (done) => {
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/en.vtt',
        type: 'vtt',
        cues: []
      };
      externalCaptionsHandler._getCuesString(new TextTrack({language: 'en'})).then((str)=> {
        externalCaptionsHandler._parseCues(str).then((result)=>{
          result.length.should.be.equal(5);
          done();
        })
      });
    });
  });


  describe('_convertSrtToVtt', () => {
    let config, player, playerContainer, externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should convert an srt string to vtt string", () => {
      const srtString = `1
                    00:00:19.000 --> 00:00:21.989
                    I'm Annita McVeigh and welcome to Election Today where we'll bring you`;
      const vttString =  `1
                    00:00:19,000 --> 00:00:21,989
                    I'm Annita McVeigh and welcome to Election Today where we'll bring you`;
      externalCaptionsHandler._convertSrtToVtt(srtString).should.be.equals(vttString)
    });

    it("should return the original string", () => {
      const srtString = `1
                    00:00:19,000 --> 00:00:21,989
                    I'm Annita McVeigh and welcome to Election Today where we'll bring you`;
      externalCaptionsHandler._convertSrtToVtt(srtString).should.be.equals(srtString)
    });
  });


  describe('_downloadAndParseCues', () => {
    let config, player, playerContainer, externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
      externalCaptionsHandler._textTrackModel['en'] = {
        url: '/base/test/src/assets/en.vtt',
        type: 'vtt',
        cues: []
      };
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should download and parse the vtt file", (done) => {
      let textTrack = new TextTrack({language: "en"});
      externalCaptionsHandler._downloadAndParseCues(textTrack).then(()=>{
        externalCaptionsHandler._textTrackModel['en'].cuesStatus.should.equal(2);
        externalCaptionsHandler._textTrackModel['en'].cues.length.should.equal(5);
        done();
      });
    });

    it("should download and parse the vtt file (neg)", (done) => {
      let textTrack = new TextTrack({language: "en"});
      externalCaptionsHandler._downloadAndParseCues(textTrack).then(()=>{
        externalCaptionsHandler._textTrackModel['en'].cuesStatus.should.not.equal(1);
        externalCaptionsHandler._textTrackModel['en'].cues.length.should.equal(5);
        done();
      });
    });
  });


  describe('_getFileType', () => {
    let config, player, playerContainer, externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should return srt", () => {
      const fileType = externalCaptionsHandler._getFileType("www.vttfile.asdf/ff/file.srt");
      fileType.should.equal('srt');
    });

    it("should return vtt", () => {
      const fileType = externalCaptionsHandler._getFileType("www.vttfile.asdf/ff/file.vtt");
      fileType.should.equal('vtt');
    });

    it("should return txt", () => {
      const fileType = externalCaptionsHandler._getFileType("www.vttfile.asdf/ff/file.txt?something=1&something23=4");
      fileType.should.equal('txt');
    });

    it("should equal ", () => {
      const fileType = externalCaptionsHandler._getFileType("www.vttfile.asdf/ff/file/nofile/what?he");
      fileType.should.equal('asdf/ff/file/nofile/what');
    });
  });


  describe('_handleCaptionOnTimeUpdate', () => {
    let config, player, playerContainer, externalCaptionsHandler, textTrack;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
      externalCaptionsHandler._textTrackModel['en'] = {
        cues: [{startTime: 1, endTime: 2},{startTime: 2, endTime: 5},{startTime: 2.5, endTime: 6},{startTime: 6, endTime: 7},{startTime: 8, endTime: 9}]
      };
      textTrack = new TextTrack({language: 'en'});
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should not update the active cues and not raise an event", (done) => {
      externalCaptionsHandler._activeTextCues = [];
      player.currentTime = 0;
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
      externalCaptionsHandler._activeTextCues.length.should.equal(0);
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, ()=>{
        should.fail("should not get here");
      });
      setTimeout(()=>{
        done();
      },500);
    });

    it("should send one active cue", (done) => {
      externalCaptionsHandler._activeTextCues = [];
      player.currentTime = 1.5;
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, (event)=>{
        event.payload.cues.length.should.equal(1);
        externalCaptionsHandler._activeTextCues.length.should.equal(1);
        done();
      });
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
    });

    it("should send 2 active cues with current active cues array", (done) => {
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, (event)=>{
        event.payload.cues.length.should.equal(2);
        externalCaptionsHandler._activeTextCues.length.should.equal(2);
        done();
      });
      externalCaptionsHandler._activeTextCues = [{startTime: 1, endTime: 2}];
      externalCaptionsHandler._externalCueIndex = 1;
      player.currentTime = 3;
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
    });

    it("should send 2 active cues without active cues array", (done) => {
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, (event)=>{
        event.payload.cues.length.should.equal(2);
        externalCaptionsHandler._activeTextCues.length.should.equal(2);
        done();
      });
      externalCaptionsHandler._activeTextCues = [{startTime: 1, endTime: 2}];
      externalCaptionsHandler._externalCueIndex = 1;
      player.currentTime = 3;
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
    });

    it("should send empty active cues without active cues array", (done) => {
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, ()=>{
        should.fail("should not get here");
      });
      externalCaptionsHandler._activeTextCues = [];
      externalCaptionsHandler._externalCueIndex = 6;
      player.currentTime = 10;
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
      setTimeout(()=>{
        done();
      },500);
    });

    it("should send empty active cues with active cues array", (done) => {
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_CUE_CHANGED, (event)=>{
        event.payload.cues.length.should.equal(0);
        externalCaptionsHandler._activeTextCues.length.should.equal(0);
        done();
      });
      externalCaptionsHandler._activeTextCues = [{startTime: 1, endTime: 2}];
      externalCaptionsHandler._externalCueIndex = 6;
      player.currentTime = 10;
      externalCaptionsHandler._handleCaptionOnTimeUpdate(textTrack);
    });
  });

  describe('createExternalTracks', () => {
    let config, player, playerContainer,externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      config.sources.captions = [
        {
          language: 'en',
          label: 'english',
          url: 'someurl'
        },
        {
          language: 'jts',
          label: 'german',
          url: 'someurl'
        }
      ];
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should return an array with 2 textTracks elements", () => {
      externalCaptionsHandler.getExternalTracks([]).length.should.equal(2);
    });

    it("should return an array with 1 textTracks elements (one same language)", () => {
      player._tracks.push(new TextTrack({language: 'en', label: 'english'}));
      externalCaptionsHandler.getExternalTracks([new TextTrack({language: 'en', label: 'english'})]).length.should.equal(1);
    });

    it("should return an empty array (no captions)", () => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      config.sources.captions = null;
      player.configure(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      externalCaptionsHandler.getExternalTracks([]).length.should.equal(0);
    });
  });

  describe('selectTextTrack', () => {
    let config, player, playerContainer,externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
      externalCaptionsHandler._textTrackModel['en'] = {
        cues: [{startTime: 1, endTime: 2},{startTime: 2, endTime: 5},{startTime: 2.5, endTime: 6},{startTime: 6, endTime: 7},{startTime: 8, endTime: 9}],
        url: '/base/test/src/assets/en.vtt',
        type: 'vtt'
      };
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should select existing english text track and dispatch a text track changed event", (done) => {
      externalCaptionsHandler._textTrackModel['en'].cuesStatus = 3;
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, (event)=>{
        event.payload.selectedTextTrack.language.should.be.equal('en');
        done();
      });
      externalCaptionsHandler.selectTextTrack(new TextTrack({language: 'en', label: 'english'}));
    });

    it("should select and download english text track and dispatch a text track changed event", (done) => {
      externalCaptionsHandler._textTrackModel['en'].cuesStatus = 1;
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, (event)=>{
        event.payload.selectedTextTrack.language.should.be.equal('en');
        done();
      });
      externalCaptionsHandler.selectTextTrack(new TextTrack({language: 'en', label: 'english'}));
    });

    it("should do nothing, cues in process", (done) => {
      externalCaptionsHandler._textTrackModel['en'].cuesStatus = 2;
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, ()=>{
        should.fail("should not get here");
      });
      externalCaptionsHandler.selectTextTrack(new TextTrack({language: 'en', label: 'english'}));
      setTimeout(()=>{
        done();
      }, 500)
    });
  });

  describe('hideTextTrack', () => {
    let config, player, playerContainer,externalCaptionsHandler;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      externalCaptionsHandler = new ExternalCaptionsHandler(player);
      playerContainer.appendChild(player.getView());
      externalCaptionsHandler._textTrackModel['en'] = {
        cues: [{startTime: 1, endTime: 2},{startTime: 2, endTime: 5},{startTime: 2.5, endTime: 6},{startTime: 6, endTime: 7},{startTime: 8, endTime: 9}],
        url: '/base/test/src/assets/en.vtt',
        type: 'vtt'
      };
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should stop listen to timeupdate", (done) => {
      externalCaptionsHandler._textTrackModel['en'].cuesStatus = 3;
      externalCaptionsHandler.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, ()=>{
        externalCaptionsHandler.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, ()=>{
          should.fail("should not get here");
        });
        externalCaptionsHandler.hideTextTrack();
        player.dispatchEvent(new FakeEvent(Html5EventType.TIME_UPDATE, {}));
        setTimeout(()=>{
          done();
        }, 500)
      });
      externalCaptionsHandler.selectTextTrack(new TextTrack({language: 'en', label: 'english'}));
    });

    it("should remove cues from the active cues property", () => {
      externalCaptionsHandler._activeTextCues = ["1","2"];
      externalCaptionsHandler._isTextTrackActive = true;
      externalCaptionsHandler.hideTextTrack();
      externalCaptionsHandler._activeTextCues.length.should.equal(0);
    });
  });
});
