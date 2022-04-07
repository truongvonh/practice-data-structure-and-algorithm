const {
  findSmallestInSortedArr,
  findHighestNumberInSortedArr,
} = require('./05.low_and_high_smallest_number');

describe('unit tests for findSmallestInSortedArr function', () => {
  it('findSmallestInSortedArr with case #1', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 5;
    const result = findSmallestInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(15);
  });

  it('findSmallestInSortedArr with case #2', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 2;
    const result = findSmallestInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(3);
  });

  it('findSmallestInSortedArr with case #3', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 8;
    const result = findSmallestInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(-1);
  });

  it('findSmallestInSortedArr with case #4', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 9;
    const result = findSmallestInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(24);
  });
});

describe('unit tests for findHighestNumberInSortedArr', () => {
  it('findHighestNumberInSortedArr with case #1', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 5;
    const result = findHighestNumberInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(17);
  });

  it('findHighestNumberInSortedArr with case #2', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 2;
    const result = findHighestNumberInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(7);
  });

  it('findHighestNumberInSortedArr with case #3', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 8;
    const result = findHighestNumberInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(-1);
  });

  it('findHighestNumberInSortedArr with case #4', () => {
    const arr = [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9,
    ];
    const target = 9;
    const result = findHighestNumberInSortedArr(arr, target, 0, arr.length - 1);
    expect(result).toBe(24);
  });
});
