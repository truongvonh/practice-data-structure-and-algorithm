const {
  commonSmallestNumberInThreeSortedArray,
} = require('./03.common_smallest_number_in_three_sorted_array');

describe('unit tests for commonSmallestNumberInThreeSortedArray function', () => {
  it('commonSmallestNumberInThreeSortedArray with case #1', () => {
    const firstArr = [6, 7, 10, 25, 30, 63, 64];
    const secondArr = [0, 4, 5, 6, 7, 8, 50];
    const thirdArr = [1, 6, 10, 14];

    const expectResult = 6;

    const result = commonSmallestNumberInThreeSortedArray(
      firstArr,
      secondArr,
      thirdArr
    );
    expect(result).toBe(expectResult);
  });
});
