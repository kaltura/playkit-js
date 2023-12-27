import Error from '../../../src/error/error';

describe('Error', () => {
  let error = null;

  it('shoud create a new error, for instance', () => {
    error = new Error(Error.Severity.CRITICAL, Error.Category.MANIFEST, Error.Code.UNABLE_TO_GUESS_MANIFEST_TYPE);
    error.code.should.equal(4000);
    error.category.should.equal(4);
    error.severity.should.equal(2);
  });

  it('shoud create a new error, for instance', () => {
    error = new Error(Error.Severity.RECOVERABLE, Error.Category.NETWORK, Error.Code.BAD_HTTP_STATUS, 'kaltura.com');
    error.code.should.equal(1001);
    error.category.should.equal(1);
    error.severity.should.equal(1);
    error.data.should.equal('kaltura.com');
  });
});
