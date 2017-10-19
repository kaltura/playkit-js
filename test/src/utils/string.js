import {Str} from '../../../src/utils/index'

describe('Str', function () {
  describe('capitlize', () => {
    it('should capitlize first letter in string', () => {
      Str.capitlize("first").charAt(0).should.equal('F');
    });

    it('should return the argument the same if it\'s not a string', () => {
      let testArg = {"notString": true};
      Str.capitlize(testArg).should.equal(testArg);
    });
  });

  describe('endsWith', function () {
    it('should check if string is ends with given string', () => {
      Str.endsWith("first", "st").should.equal(true);
    });

    it('should return false if argument not string', () => {
      let testArg = {"notString": true};
      Str.endsWith(testArg, "t").should.equal(false);
    });

    it('should return false if search argument not string', () => {
      let testArg = {"notString": true};
      Str.endsWith("first", testArg).should.equal(false);
    });
  });
});
