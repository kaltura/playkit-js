import StreamPriorityList from '../../../../src/player-options/lists/stream-priority-list'
import StreamPriority from '../../../../src/player-options/items/stream-priority'

describe('StreamPriorityList', () => {
  const engine = 'engine';
  const format = 'format';
  const sp = {engine: engine, format: format};

  it('should create empty stream priority list', () => {
    const spl = new StreamPriorityList();
    spl.should.be.instanceOf(StreamPriorityList);
    spl.list.should.deep.equal([]);
  });

  it('should create stream priority list with initial item', () => {
    const spi = new StreamPriority(engine, format);
    const spl = new StreamPriorityList([spi]);
    spl.should.be.instanceOf(StreamPriorityList);
    spl.list.should.be.an('array').that.include(spi);
    spl.list[0].should.be.instanceOf(StreamPriority);
    spl.list[0].engine.should.equal(engine);
    spl.list[0].format.should.equal(format);
  });

  it('should throw error when creating stream priority list with wrong type of items in array', (done) => {
    try {
      new StreamPriority([1]);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating stream priority list with wrong type of param', (done) => {
    try {
      new StreamPriority(1);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create stream priority list and set stream priority later', () => {
    const spl = new StreamPriorityList();
    spl.should.be.instanceOf(StreamPriorityList);
    spl.list.should.deep.equal([]);
    spl.list = [new StreamPriority(engine, format)];
    spl.list.should.be.an('array');
    spl.list[0].should.be.instanceOf(StreamPriority);
    spl.list[0].engine.should.equal(engine);
    spl.list[0].format.should.equal(format);
  });

  it('should create stream priority list by json', () => {
    const spl = new StreamPriorityList([sp]);
    spl.should.be.instanceOf(StreamPriorityList);
    spl.list.should.be.an('array');
    spl.list[0].should.be.instanceOf(StreamPriority);
    spl.list[0].engine.should.equal(engine);
    spl.list[0].format.should.equal(format);
  });

  it('should throw error when creating stream priority list by wrong type of json', (done) => {
    try {
      new StreamPriorityList({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create emprty stream priority list and set list by json with later', () => {
    const spl = new StreamPriorityList();
    spl.should.be.instanceOf(StreamPriorityList);
    spl.list.should.deep.equal([]);
    spl.list = [sp];
    spl.list.should.be.an('array');
    spl.list[0].should.be.instanceOf(StreamPriority);
    spl.list[0].engine.should.equal(engine);
    spl.list[0].format.should.equal(format);
  });

  it('should get json stream priority list', () => {
    const json = [sp];
    const spl = new StreamPriorityList([sp]);
    spl.should.be.instanceOf(StreamPriorityList);
    spl.toJSON().should.deep.equal(json);
  });
});
