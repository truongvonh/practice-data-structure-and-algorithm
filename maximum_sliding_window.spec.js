const { getMaximumOfSubArray } = require('./01.maximum_sliding_window');

describe('unit-test for maximum_sliding_window', () => {
  it('maximum_sliding_window test case #1', () => {
    const expectCase1 = [3, 3, 4, 5, 5, 5, 6];
    const inputForCase1 = [1, 2, 3, 1, 4, 5, 2, 3, 6];
    const k = 3;

    expect(getMaximumOfSubArray(inputForCase1, k)).toEqual(expectCase1);
  });

  it('maximum_sliding_window test case #2', () => {
    const expectCase2 = [10, 10, 10, 15, 15, 90, 90];
    const inputForCase2 = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
    const k = 4;

    expect(getMaximumOfSubArray(inputForCase2, k)).toEqual(expectCase2);
  });
});
