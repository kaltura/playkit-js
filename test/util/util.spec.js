import * as util from '../../src/util/util';

describe('util', () => {

  it('should return if a certain input is a number', () => {
    util.isNumber(-3).should.be.true;
    util.isNumber(2).should.be.true;
    util.isNumber(5.2).should.be.true;
    util.isNumber('hello').should.be.false;
    util.isNumber({}).should.be.false;
  });

  it('should return if a certain input is a number of type integer', () => {
    util.isInt(3).should.be.true;
    util.isInt(3.1).should.be.false;
    util.isInt('hello').should.be.false;
    util.isInt({}).should.be.false;
  });

  it('should return if a certain input is a number of type float', () => {
    util.isFloat(3.1).should.be.true;
    util.isFloat(6.455).should.be.true;
    util.isFloat(8).should.be.false;
    util.isFloat('hello').should.be.false;
    util.isFloat({}).should.be.false;
  });

});
