import StreamPriority from '../../../../src/player-options/items/stream-priority'

describe('StreamPriority', () => {
  const engine = 'engine';
  const format = 'format';

  it('should create stream priority with engine and format', () => {
    const sp = new StreamPriority(engine, format);
    sp.should.be.instanceOf(StreamPriority);
    sp.engine.should.equal(engine);
    sp.format.should.equal(format);
  });

  it('should throw error when creating stream priority without engine and format', (done) => {
    try {
      new StreamPriority();
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating stream priority with wrong type of engine and format', (done) => {
    try {
      new StreamPriority(0, 0);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create stream priority by json', () => {
    const sp = new StreamPriority({engine: engine, format: format});
    sp.should.be.instanceOf(StreamPriority);
    sp.engine.should.equal(engine);
    sp.format.should.equal(format);
  });

  it('should throw error when creating stream priority by json without engine and format', (done) => {
    try {
      new StreamPriority({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating stream priority by json with wrong type of engine and format', (done) => {
    try {
      new StreamPriority({engine: 0, format: 0});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should get json stream priority', () => {
    const json = {
      engine: engine,
      format: format
    };
    const sp = new StreamPriority(json);
    sp.should.be.instanceOf(StreamPriority);
    sp.toJSON().should.deep.equal(json);
  });
});

