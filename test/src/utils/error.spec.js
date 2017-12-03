import Error from '../../../src/utils/error/player-error'

describe('Error class', () => {

  let error = null;

  beforeEach(() => {
    error = new Error(Error.Severity.CRITICAL, Error.Category.MANIFEST, Error.Code.UNABLE_TO_GUESS_MANIFEST_TYPE, );
  });

  it('shoud create a new error instance', () => {
    error.code.should.equal(4000);
    error.category.should.equal(4);
    error.severity.should.equal(2);
  });

});
