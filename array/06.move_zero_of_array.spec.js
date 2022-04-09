const {
  moveAllZeroOfArray,
  moveAllZeroOfArrayOptimized,
} = require('./06.move_zero_of_array');

describe('unit tests for moveAllZeroOfArray function', () => {
  it('moveAllZeroOfArray with case #1', () => {
    const result = moveAllZeroOfArrayOptimized([
      1, 10, 20, 0, 59, 63, 0, 88, 0,
    ]);
    expect(result).toEqual([0, 0, 0, 1, 10, 20, 59, 63, 88]);
  });

  it('moveAllZeroOfArray with case #2', () => {
    const result = moveAllZeroOfArrayOptimized([1, 0, 2, 3, 0]);
    expect(result).toEqual([0, 0, 1, 2, 3]);
  });

  it('moveAllZeroOfArray with case #3', () => {
    const result = moveAllZeroOfArrayOptimized([-1, 0, 0, -2, 9]);
    expect(result).toEqual([0, 0, -1, -2, 9]);
  });

  it('moveAllZeroOfArray with case #4', () => {
    const result = moveAllZeroOfArrayOptimized([0]);
    expect(result).toEqual([0]);
  });

  it('moveAllZeroOfArray with case #5', () => {
    const result = moveAllZeroOfArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('moveAllZeroOfArray with case #6', () => {
    const result = moveAllZeroOfArray([2]);
    expect(result).toEqual([2]);
  });
});
