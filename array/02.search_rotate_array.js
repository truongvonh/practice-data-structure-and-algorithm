const findPivotOfSortArray = (arr = [], low = 0, hight = 1) => {
  const mid = Math.floor((low + hight) / 2);

  if (arr[mid] > arr[mid + 1]) {
    return mid + 1;
  }

  if (low < arr[mid]) {
    return findPivotOfSortArray(arr, arr[mid], arr[arr.length - 1]);
  }

  if (low > arr[mid]) {
    return findPivotOfSortArray(arr, low, arr[mid]);
  }
};

const binarySearch = (arr = [], target = 0, start = 0, end = 0) => {
  const mid = Math.floor((start + end) / 2);
  console.log({ binarySearchMid: mid });

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, end);
};

/*
  @Explaination
  @ref: https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
  @implmentation: 
    Element to Search = 1
    1) Find out pivot point and divide the array in two
        sub-arrays. (pivot = 2)  
    2) Now call binary search for one of the two sub-arrays.
        (a) If element is greater than 0th element then
               search in left array
        (b) Else Search in right array
            (1 will go in else as 1 < 0th element(3))
    3) If element is found in selected sub-array then return index
       Else return -1.
*/
const searchRotateArray = (arr = [], target = 1, start = 0, end = 0) => {
  let pivot = findPivotOfSortArray(arr, start, end);

  if (start > end) {
    return -1;
  }

  if (target === pivot) {
    return pivot;
  }

  if (target < arr[start]) {
    return binarySearch(arr, target, pivot, arr.length - 1);
  }

  return binarySearch(arr, target, start, pivot);
};

module.exports = {
  searchRotateArray,
  findPivotOfSortArray,
};
