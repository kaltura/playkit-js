import {capitlize} from '../../src/util/stringUtils';

describe('capitlize', () => {

  it('should capitlize first letter in string', () => {
    capitlize("first").charAt(0).should.equal('F');
  });

  it('should return the argument the same if it\'s not a string', () => {
    let testArg = {"notString": true};
    capitlize(testArg).should.equal(testArg);
  });

});
