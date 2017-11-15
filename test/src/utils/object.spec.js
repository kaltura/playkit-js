import {Obj} from '../../../src/utils/index'

describe('Obj', function () {
  describe('merge', function () {
    it('should merge 2 objects', () => {
      let obj1 = {x: 1}, obj2 = {y: 2};
      Obj.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
    });

    it('should merge 3 objects', () => {
      let obj1 = {x: 1}, obj2 = {y: 2}, obj3 = {z: 3};
      Obj.merge([obj1, obj2, obj3]).should.deep.equals({x: 1, y: 2, z: 3});
      obj1 = null;
      obj2 = null;
      Obj.merge([obj1, obj2, obj3]).should.deep.equals({z: 3});
    });

    it('should override y property', () => {
      let obj1 = {x: 1, y: 1}, obj2 = {y: 2};
      Obj.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
    });

    it('should return obj1 as the result', () => {
      let obj1 = {x: 1}, obj2 = null;
      Obj.merge([obj1, obj2]).should.deep.equals({x: 1});
      obj2 = {};
      Obj.merge([obj1, obj2]).should.deep.equals({x: 1});
    });

    it('should return obj2 as the result', () => {
      let obj1 = null, obj2 = {y: 2};
      Obj.merge([obj1, obj2]).should.deep.equals({y: 2});
      obj1 = {};
      Obj.merge([obj1, obj2]).should.deep.equals({y: 2});
    });

    it('should return empty object', () => {
      let obj1 = null, obj2 = null;
      Obj.merge([obj1, obj2]).should.deep.equals({});
      obj1 = {};
      obj2 = {};
      Obj.merge([obj1, obj2]).should.deep.equals({});
    });
  });

  describe('mergeDeep', function () {
    it('should deep merge object', function () {
      Obj.mergeDeep({x: 1}, {x: 2, y: {z: 1}}).should.deep.equals({x: 2, y: {z: 1}});
      Obj.mergeDeep({y: 1}, {x: 2}).should.deep.equals({y: 1, x: 2});
      Obj.mergeDeep({}, {x: 2}).should.deep.equals({x: 2});
    });
  });

  describe('copyDeep', function () {
    it('should deep copy object', function () {
      let myObj = {x: 1, y: 2};
      let resObject = Obj.copyDeep(myObj);
      resObject.should.deep.equals(myObj);
      resObject.x = 2;
      resObject.y = 1;
      myObj.should.deep.equals({x: 1, y: 2});
      resObject.should.deep.equals({x: 2, y: 1});
    });
  });

  describe('isEmptyObject', function () {
    it('should return if an object is an empty object', function () {
      Obj.isEmptyObject(null).should.be.true;
      Obj.isEmptyObject(undefined).should.be.true;
      Obj.isEmptyObject({}).should.be.true;
      Obj.isEmptyObject({x: 1}).should.be.false;
    });
  });

  describe('getPropertyPath', function () {
    let o;

    before(function () {
      o = {a: {b: {c: {d: {e: 1}}}}};
    });

    it('should return the value at an object property path', function () {
      Obj.getPropertyPath(o, 'a.b').should.deep.equals({c: {d: {e: 1}}});
      Obj.getPropertyPath(o, 'a.b.c').should.deep.equals({d: {e: 1}});
      Obj.getPropertyPath(o, 'a.b.c.d').should.deep.equals({e: 1});
      Obj.getPropertyPath(o, 'a.b.c.d.e').should.deep.equals(1);
      (Obj.getPropertyPath(o, 'a.o') === undefined).should.be.true;
    });
  });

  describe('hasPropertyPath', function () {
    let o;

    before(function () {
      o = {a: {b: {c: {d: {e: 1}}}}};
    });

    it('should return if an object has the property path', function () {
      Obj.hasPropertyPath(o, 'a.b').should.be.true;
      Obj.hasPropertyPath(o, 'a.b.c').should.be.true;
      Obj.hasPropertyPath(o, 'a.b.c.d').should.be.true;
      Obj.hasPropertyPath(o, 'a.b.c.d.e').should.be.true;
      Obj.hasPropertyPath(o, 'a.o').should.be.false;
      Obj.hasPropertyPath(o, 'a.b.c.d.e.f').should.be.false;
    });
  });
});
