import * as Utils from '../../../src/utils/util';

describe('util', () => {
  describe('Number', function () {
    describe('isNumber', function () {
      it('should return if a certain input is a number', () => {
        Utils.Number.isNumber(-3).should.be.true;
        Utils.Number.isNumber(2).should.be.true;
        Utils.Number.isNumber(5.2).should.be.true;
        Utils.Number.isNumber('hello').should.be.false;
        Utils.Number.isNumber({}).should.be.false;
      });
    });

    describe('isInt', function () {
      it('should return if a certain input is a number of type integer', () => {
        Utils.Number.isInt(3).should.be.true;
        Utils.Number.isInt(3.1).should.be.false;
        Utils.Number.isInt('hello').should.be.false;
        Utils.Number.isInt({}).should.be.false;
      });
    });

    describe('isFloat', function () {
      it('should return if a certain input is a number of type float', () => {
        Utils.Number.isFloat(3.1).should.be.true;
        Utils.Number.isFloat(6.455).should.be.true;
        Utils.Number.isFloat(8).should.be.false;
        Utils.Number.isFloat('hello').should.be.false;
        Utils.Number.isFloat({}).should.be.false;
      });
    });
  });

  describe('Object', function () {
    describe('merge', function () {
      it('should merge 2 objects', () => {
        let obj1 = {x: 1},
          obj2 = {y: 2};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
      });

      it('should merge 3 objects', () => {
        let obj1 = {x: 1},
          obj2 = {y: 2},
          obj3 = {z: 3};
        Utils.Object.merge([obj1, obj2, obj3]).should.deep.equals({x: 1, y: 2, z: 3});
        obj1 = null;
        obj2 = null;
        Utils.Object.merge([obj1, obj2, obj3]).should.deep.equals({z: 3});
      });

      it('should override y property', () => {
        let obj1 = {x: 1, y: 1},
          obj2 = {y: 2};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({x: 1, y: 2});
      });

      it('should return obj1 as the result', () => {
        let obj1 = {x: 1},
          obj2 = null;
        Utils.Object.merge([obj1, obj2]).should.deep.equals({x: 1});
        obj2 = {};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({x: 1});
      });

      it('should return obj2 as the result', () => {
        let obj1 = null,
          obj2 = {y: 2};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({y: 2});
        obj1 = {};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({y: 2});
      });

      it('should return empty object', () => {
        let obj1 = null,
          obj2 = null;
        Utils.Object.merge([obj1, obj2]).should.deep.equals({});
        obj1 = {};
        obj2 = {};
        Utils.Object.merge([obj1, obj2]).should.deep.equals({});
      });
    });

    describe('mergeDeep', function () {
      it('should deep merge object', function () {
        Utils.Object.mergeDeep({x: 1}, {x: 2, y: {z: 1}}).should.deep.equals({x: 2, y: {z: 1}});
        Utils.Object.mergeDeep({y: 1}, {x: 2}).should.deep.equals({y: 1, x: 2});
        Utils.Object.mergeDeep({}, {x: 2}).should.deep.equals({x: 2});
      });
    });

    describe('copyDeep', function () {
      it('should deep copy object', function () {
        let myObj = {x: 1, y: 2};
        let resObject = Utils.Object.copyDeep(myObj);
        resObject.should.deep.equals(myObj);
        resObject.x = 2;
        resObject.y = 1;
        myObj.should.deep.equals({x: 1, y: 2});
        resObject.should.deep.equals({x: 2, y: 1});
      });
    });

    describe('isEmptyObject', function () {
      it('should return if an object is an empty object', function () {
        Utils.Object.isEmptyObject(null).should.be.true;
        Utils.Object.isEmptyObject(undefined).should.be.true;
        Utils.Object.isEmptyObject({}).should.be.true;
        Utils.Object.isEmptyObject({x: 1}).should.be.false;
      });
    });

    describe('getPropertyPath', function () {
      let o;

      before(function () {
        o = {a: {b: {c: {d: {e: 1}}}}};
      });

      it('should return the value at an object property path', function () {
        Utils.Object.getPropertyPath(o, 'a.b').should.deep.equals({c: {d: {e: 1}}});
        Utils.Object.getPropertyPath(o, 'a.b.c').should.deep.equals({d: {e: 1}});
        Utils.Object.getPropertyPath(o, 'a.b.c.d').should.deep.equals({e: 1});
        Utils.Object.getPropertyPath(o, 'a.b.c.d.e').should.deep.equals(1);
        (Utils.Object.getPropertyPath(o, 'a.o') === undefined).should.be.true;
      });
    });

    describe('hasPropertyPath', function () {
      let o;

      before(function () {
        o = {a: {b: {c: {d: {e: 1}}}}};
      });

      it('should return if an object has the property path', function () {
        Utils.Object.hasPropertyPath(o, 'a.b').should.be.true;
        Utils.Object.hasPropertyPath(o, 'a.b.c').should.be.true;
        Utils.Object.hasPropertyPath(o, 'a.b.c.d').should.be.true;
        Utils.Object.hasPropertyPath(o, 'a.b.c.d.e').should.be.true;
        Utils.Object.hasPropertyPath(o, 'a.o').should.be.false;
        Utils.Object.hasPropertyPath(o, 'a.b.c.d.e.f').should.be.false;
      });
    });
  });

  describe('String', function () {
    describe('capitlize', () => {
      it('should capitlize first letter in string', () => {
        Utils.String.capitlize('first').charAt(0).should.equal('F');
      });

      it("should return the argument the same if it's not a string", () => {
        let testArg = {notString: true};
        Utils.String.capitlize(testArg).should.equal(testArg);
      });
    });

    describe('endsWith', function () {
      it('should check if string is ends with given string', () => {
        Utils.String.endsWith('first', 'st').should.equal(true);
      });

      it('should return false if argument not string', () => {
        let testArg = {notString: true};
        Utils.String.endsWith(testArg, 't').should.equal(false);
      });

      it('should return false if search argument not string', () => {
        let testArg = {notString: true};
        Utils.String.endsWith('first', testArg).should.equal(false);
      });
    });
  });

  describe('Generator', function () {
    describe('uniqueId', function () {
      it('should create unique id', function () {
        Utils.Generator.uniqueId().length.should.equals(3);
        Utils.Generator.uniqueId(-2).length.should.equals(3);
        Utils.Generator.uniqueId(3).length.should.equals(4);
        Utils.Generator.uniqueId().should.contains('_');
      });
    });
  });

  describe('Version', function () {
    describe('Compare', function () {
      it('The first should be smaller than the second', function () {
        (Utils.VERSION.compare('1.7.1', '1.7.10') < 0).should.be.true;
        (Utils.VERSION.compare('1.7.2', '1.7.10') < 0).should.be.true;
        (Utils.VERSION.compare('1.6.1', '1.7.10') < 0).should.be.true;
        (Utils.VERSION.compare('1.6.20', '1.7.10') < 0).should.be.true;
        (Utils.VERSION.compare('1.7.1', '1.7.10') < 0).should.be.true;
        (Utils.VERSION.compare('1.7', '1.7.0', {zeroExtend: false}) < 0).should.be.true;
        (Utils.VERSION.compare('1.7', '1.8.0') < 0).should.be.true;
        (Utils.VERSION.compare('1.7.2', '1.7.10b') < 0).should.be.true;
      });

      it('The first should be greater than the second', function () {
        (Utils.VERSION.compare('1.7.2', '1.7.10b', {lexicographical: true}) > 0).should.be.true;
        (Utils.VERSION.compare('1.7.10', '1.7.1') > 0).should.be.true;
        (Utils.VERSION.compare('1.7.10', '1.6.1') > 0).should.be.true;
        (Utils.VERSION.compare('1.7.10', '1.6.20') > 0).should.be.true;
        (Utils.VERSION.compare('1.7.0', '1.7', {zeroExtend: false}) > 0).should.be.true;
        (Utils.VERSION.compare('1.8.0', '1.7') > 0).should.be.true;
      });

      it('The first should be equal the second', function () {
        (Utils.VERSION.compare('1.7.10', '1.7.10') === 0).should.be.true;
        (Utils.VERSION.compare('1.7', '1.7') === 0).should.be.true;
        (Utils.VERSION.compare('1.7', '1.7.0') === 0).should.be.true;
      });

      it('Should return NaN for a bad version', function () {
        isNaN(Utils.VERSION.compare('1.7', '1..7')).should.be.true;
        isNaN(Utils.VERSION.compare('1.7', 'bad')).should.be.true;
        isNaN(Utils.VERSION.compare('1..7', '1.7')).should.be.true;
        isNaN(Utils.VERSION.compare('bas', '1.7')).should.be.true;
      });
    });
  });

  describe('Http', function () {
    describe('convertHeadersToDictionary', function () {
      it('Should convert header row to map', function () {
        const headerRow = `cache-control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
content-length: 3201
content-type: application/json
date: Wed, 25 Mar 2020 12:48:28 GMT
expires: Sun, 19 Nov 2000 08:52:00 GMT
pragma: no-cache
server: Apache/2.4.18 (Ubuntu)
x-kaltura-session: 2089078255
x-me: qa-apache-php7, qa-apache-php7
    `;
        const headerMap = Utils.Http.convertHeadersToDictionary(headerRow);
        headerMap['cache-control'].should.equal('no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
        headerMap['content-length'].should.equal('3201');
        headerMap['content-type'].should.equal('application/json');
        headerMap['date'].should.equal('Wed, 25 Mar 2020 12:48:28 GMT');
        headerMap['expires'].should.equal('Sun, 19 Nov 2000 08:52:00 GMT');
        headerMap['pragma'].should.equal('no-cache');
        headerMap['server'].should.equal('Apache/2.4.18 (Ubuntu)');
        headerMap['x-kaltura-session'].should.equal('2089078255');
        headerMap['x-me'].should.equal('qa-apache-php7, qa-apache-php7');
      });

      it('Should convert All keys to lowercased', function () {
        const headerRow = `cache-CONTROL: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
content-lenGth: 3201
conTent-type: application/json
date: Wed, 25 Mar 2020 12:48:28 GMT
      `;
        const headerMap = Utils.Http.convertHeadersToDictionary(headerRow);
        headerMap['cache-control'].should.equal('no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
        headerMap['content-length'].should.equal('3201');
        headerMap['content-type'].should.equal('application/json');
        headerMap['date'].should.equal('Wed, 25 Mar 2020 12:48:28 GMT');
      });

      it('Should return empty object for null', function () {
        Utils.Http.convertHeadersToDictionary().should.deep.equals({});
      });
    });
  });
});
