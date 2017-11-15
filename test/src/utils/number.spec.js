import {Num} from '../../../src/utils/index'

describe('Num', function () {
  describe('isNumber', function () {
    it('should return if a certain input is a number', () => {
      Num.isNumber(-3).should.be.true;
      Num.isNumber(2).should.be.true;
      Num.isNumber(5.2).should.be.true;
      Num.isNumber('hello').should.be.false;
      Num.isNumber({}).should.be.false;
    });
  });

  describe('isInt', function () {
    it('should return if a certain input is a number of type integer', () => {
      Num.isInt(3).should.be.true;
      Num.isInt(3.1).should.be.false;
      Num.isInt('hello').should.be.false;
      Num.isInt({}).should.be.false;
    });
  });

  describe('isFloat', function () {
    it('should return if a certain input is a number of type float', () => {
      Num.isFloat(3.1).should.be.true;
      Num.isFloat(6.455).should.be.true;
      Num.isFloat(8).should.be.false;
      Num.isFloat('hello').should.be.false;
      Num.isFloat({}).should.be.false;
    });
  });
});
