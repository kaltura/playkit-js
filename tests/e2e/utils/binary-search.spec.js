import {binarySearch} from '../../../src/utils';

describe('binarySearch', () => {
  it('should find primitives', () => {
    binarySearch([1, 2, 3, 4, 7, 8, 9, 10], int => int - 7).should.equal(7);
    binarySearch([1, 2, 3, 4, 7, 8, 9, 10], int => int - 2).should.equal(2);
    binarySearch([0, 1, 2, 3, 4, 7, 8, 9, 10], int => int - 0).should.equal(0);
    binarySearch([-1, 2, 3, 4, 7, 8, 9, 10], int => int + 1).should.equal(-1);
    (binarySearch([-1, 2, 3, 4, 7, 8, 9, 10], int => int - 11) === null).should.be.true;
  });
  it('should find object', () => {
    binarySearch([{num: 0}, {num: 10}, {num: 100}, {num: 1000}], obj => obj.num - 1000).should.deep.equal({num: 1000});
    (binarySearch([{num: 0}, {num: 10}, {num: 100}, {num: 1000}], obj => obj.num - 2000) === null).should.be.true;
  });
  it('should has default', () => {
    (binarySearch(undefined, int => int - 1) === null).should.be.true;
    (binarySearch([-1, 2, 3, 4, 7, 8, 9, 10]) === null).should.be.true;
  });
});
