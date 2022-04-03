const {
  searchRotateArray,
  findPivotOfSortArray,
} = require('./02.search_rotate_array');

describe('unit tests for searchRotateArray', () => {
  it('searchRotateArray with case #1', () => {
    const searchArray = [5, 6, 7, 8, 9, 10, 1, 2, 3];
    const target = 3;
    const expectResult = 8;

    const result = searchRotateArray(
      searchArray,
      target,
      0,
      searchArray.length - 1
    );

    expect(result).toBe(expectResult);
  });

  it('case #1 unit tests for findPivotOfSortArray function', () => {
    const sortRotatedArray = [3, 4, 5, 6, 1, 2];
    const pivotExpected = 4;

    const pivot = findPivotOfSortArray(
      sortRotatedArray,
      sortRotatedArray[0],
      sortRotatedArray[sortRotatedArray.length - 1]
    );
    expect(pivot).toBe(pivotExpected);
  });

  it('case #2 unit tests for findPivotOfSortArray function', () => {
    const sortRotatedArray = [5, 6, 7, 8, 9, 10, 1, 2, 3];
    const pivotExpected = 6;

    const pivot = findPivotOfSortArray(
      sortRotatedArray,
      sortRotatedArray[0],
      sortRotatedArray[sortRotatedArray.length - 1]
    );
    expect(pivot).toBe(pivotExpected);
  });
});
