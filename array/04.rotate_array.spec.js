const { rotateArray } = require('./04.rotate_array');

describe('unit tests for rotateArray function', () => {
  it('commonSmallestNumberInThreeSortedArray with case #1', () => {
    const result = rotateArray([-1, -100, 3, 99], 2);
    expect(result).toEqual([3, 99, -1, -100]);
  });

  it('commonSmallestNumberInThreeSortedArray with case #2', () => {
    const result = rotateArray([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  it('commonSmallestNumberInThreeSortedArray with case #3', () => {
    const result = rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
    expect(result).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('commonSmallestNumberInThreeSortedArray with case #4', () => {
    const result = rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3);
    expect(result).toEqual([0, 59, 86, 32, 11, 9, 40, 1, 10, 20]);
  });
});
