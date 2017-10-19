import {Generator} from '../../../src/utils/index'

describe('Generator', function () {
  describe('uniqueId', function () {
    it('should create unique id', function () {
      Generator.uniqueId().length.should.equals(3);
      Generator.uniqueId(-2).length.should.equals(3);
      Generator.uniqueId(3).length.should.equals(4);
      Generator.uniqueId().should.contains('_');
    });
  });
});
