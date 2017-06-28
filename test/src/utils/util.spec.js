import * as util from '../../../src/utils/util'

describe('util', () => {

  describe('isNumber', function () {
    it('should return if a certain input is a number', () => {
      util.isNumber(-3).should.be.true;
      util.isNumber(2).should.be.true;
      util.isNumber(5.2).should.be.true;
      util.isNumber('hello').should.be.false;
      util.isNumber({}).should.be.false;
    });
  });

  describe('isInt', function () {
    it('should return if a certain input is a number of type integer', () => {
      util.isInt(3).should.be.true;
      util.isInt(3.1).should.be.false;
      util.isInt('hello').should.be.false;
      util.isInt({}).should.be.false;
    });
  });

  describe('isFloat', function () {
    it('should return if a certain input is a number of type float', () => {
      util.isFloat(3.1).should.be.true;
      util.isFloat(6.455).should.be.true;
      util.isFloat(8).should.be.false;
      util.isFloat('hello').should.be.false;
      util.isFloat({}).should.be.false;
    });
  });

  describe('merge', function () {
    it('should merge 2 objects', () => {
      let obj1 = {x: 1}, obj2 = {y: 2};
      util.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
    });

    it('should merge 3 objects', () => {
      let obj1 = {x: 1}, obj2 = {y: 2}, obj3 = {z: 3};
      util.merge([obj1, obj2, obj3]).should.deep.equals({x: 1, y: 2, z: 3});
      obj1 = null;
      obj2 = null;
      util.merge([obj1, obj2, obj3]).should.deep.equals({z: 3});
    });

    it('should override y property', () => {
      let obj1 = {x: 1, y: 1}, obj2 = {y: 2};
      util.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
    });

    it('should return obj1 as the result', () => {
      let obj1 = {x: 1}, obj2 = null;
      util.merge([obj1, obj2]).should.deep.equals({x: 1});
      obj2 = {};
      util.merge([obj1, obj2]).should.deep.equals({x: 1});
    });

    it('should return obj2 as the result', () => {
      let obj1 = null, obj2 = {y: 2};
      util.merge([obj1, obj2]).should.deep.equals({y: 2});
      obj1 = {};
      util.merge([obj1, obj2]).should.deep.equals({y: 2});
    });

    it('should return empty object', () => {
      let obj1 = null, obj2 = null;
      util.merge([obj1, obj2]).should.deep.equals({});
      obj1 = {};
      obj2 = {};
      util.merge([obj1, obj2]).should.deep.equals({});
    });
  });

  describe('mergeDeep', function () {
    it('should deep merge object', function () {
      util.mergeDeep({x: 1}, {x: 2, y: {z: 1}}).should.deep.equals({x: 2, y: {z: 1}});
      util.mergeDeep({y: 1}, {x: 2}).should.deep.equals({y: 1, x: 2});
      util.mergeDeep({}, {x: 2}).should.deep.equals({x: 2});
    });
  });

  describe('copyDeep', function () {
    it('should deep copy object', function () {
      let myObj = {x: 1, y: 2};
      let resObject = util.copyDeep(myObj);
      resObject.should.deep.equals(myObj);
      resObject.x = 2;
      resObject.y = 1;
      myObj.should.deep.equals({x: 1, y: 2});
      resObject.should.deep.equals({x: 2, y: 1});
    });
  });

  describe('id', function () {
    it('should create unique id', function () {
      util.uniqueId().length.should.equals(3);
      util.uniqueId(-2).length.should.equals(3);
      util.uniqueId(3).length.should.equals(4);
      util.uniqueId().should.contains('_');
    });
  });

  describe('isEmptyObject', function () {
    it('should return if an object is an empty object', function () {
      util.isEmptyObject(null).should.be.true;
      util.isEmptyObject(undefined).should.be.true;
      util.isEmptyObject({}).should.be.true;
      util.isEmptyObject({x: 1}).should.be.false;
    });
  });
});
