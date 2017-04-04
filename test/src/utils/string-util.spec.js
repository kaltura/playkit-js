import {capitlize, endsWith} from '../../../src/utils/string-util'

describe('capitlize', () => {
  it('should capitlize first letter in string', () => {
    capitlize("first").charAt(0).should.equal('F');
  });

  it('should return the argument the same if it\'s not a string', () => {
    let testArg = {"notString": true};
    capitlize(testArg).should.equal(testArg);
  });

  it('should check if string is ends with given string', () => {
    endsWith("first","st").should.equal(true);
  });

  it('should return false if argument not string', () => {
    let testArg = {"notString": true};
    endsWith(testArg,"t").should.equal(false);
  });

  it('should return false if search argument not string', () => {
    let testArg = {"notString": true};
    endsWith("first",testArg).should.equal(false);
  });
});
