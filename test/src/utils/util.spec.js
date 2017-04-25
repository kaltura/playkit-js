import * as util from '../../../src/utils/util'

describe('isNumber', () => {
  it('should return if a certain input is a number', () => {
    util.isNumber(-3).should.be.true;
    util.isNumber(2).should.be.true;
    util.isNumber(5.2).should.be.true;
    util.isNumber('hello').should.be.false;
    util.isNumber({}).should.be.false;
  });
});

describe('isInt', () => {
  it('should return if a certain input is a number of type integer', () => {
    util.isInt(3).should.be.true;
    util.isInt(3.1).should.be.false;
    util.isInt('hello').should.be.false;
    util.isInt({}).should.be.false;
  });
});

describe('isFloat', () => {
  it('should return if a certain input is a number of type float', () => {
    util.isFloat(3.1).should.be.true;
    util.isFloat(6.455).should.be.true;
    util.isFloat(8).should.be.false;
    util.isFloat('hello').should.be.false;
    util.isFloat({}).should.be.false;
  });
});

describe('merge', () => {
  it('should merge 2 objects', () => {
    let obj1 = {x: 1}, obj2 = {y: 2};
    util.merge(obj1, obj2).should.deep.equals({x: 1, y: 2});
  });

  it('should override y property', () => {
    let obj1 = {x: 1, y: 1}, obj2 = {y: 2};
    util.merge(obj1, obj2).should.deep.equals({x: 1, y: 2});
  });

  it('should return obj1 as the result', () => {
    let obj1 = {x: 1}, obj2 = null;
    util.merge(obj1, obj2).should.deep.equals({x: 1});
    obj2 = {};
    util.merge(obj1, obj2).should.deep.equals({x: 1});
  });

  it('should return obj2 as the result', () => {
    let obj1 = null, obj2 = {y: 2};
    util.merge(obj1, obj2).should.deep.equals({y: 2});
    obj1 = {};
    util.merge(obj1, obj2).should.deep.equals({y: 2});
  });

  it('should return empty object', () => {
    let obj1 = null, obj2 = null;
    util.merge(obj1, obj2).should.deep.equals({});
    obj1 = {};
    obj2 = {};
    util.merge(obj1, obj2).should.deep.equals({});
  });
});

describe('getQueryVariable', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  it('should retrieve the correct key for a certain value', () => {
    sinon.stub(window, 'decodeURIComponent').returns("foo=bar&test={}&num=2");
    util.getQueryVariable('foo').should.equal('bar');
    util.getQueryVariable('test').should.equal('{}');
    util.getQueryVariable('num').should.equal('2');
  });

  it('should return null', () => {
    (util.getQueryVariable('bar') === null).should.be.true;
  });

  afterEach(() => {
    sandbox.restore();
  });
});



