import chai from 'chai';
import {capitlize} from '../../src/util/stringUtils';

chai.should();

describe('capitlize', () => {

  it('should capitlize first letter in string', () => {
    capitlize("first").charAt(0).should.equal('F');
  });

});
