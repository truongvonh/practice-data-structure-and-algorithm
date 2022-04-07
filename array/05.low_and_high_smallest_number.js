const computeMid = (start = 0, end = 0) => {
  return Math.floor((end + start) / 2);
};

const computeStart = (mid, end) => {
  return Math.floor(mid * 2 - end);
};

const findSmallestInSortedArr = (arr = [], target = 0) => {
  const START_INDEX = 0;
  let start = START_INDEX;
  let end = arr.length - 1;
  let mid = computeMid(start, end);

  while (start <= end) {
    if (arr[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid;
    }

    mid = computeMid(start, end);

    if (arr[mid] < target) {
      mid = mid + 1;
      start = computeStart(mid, end);
    }
  }

  const isTargetEqualLastIndex = !arr[start] && arr[start - 1] === target;

  if (arr[start] === target || isTargetEqualLastIndex) {
    return start - 1;
  }

  return -1;
};

const findHighestNumberInSortedArr = (arr = [], target = 0) => {
  const START_INDEX = 0;
  let start = START_INDEX;
  let end = arr.length - 1;
  let mid = computeMid(start, end);

  while (start < end) {
    if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = computeMid(start, end);

    if (arr[mid] <= target) {
      mid = mid + 1;
      start = computeStart(mid, end);
    }
  }

  if (arr[start] > target && arr[start - 1] === target) {
    return start - 1;
  }

  if (!arr[start] && arr[end] === target) {
    return end;
  }

  return -1;
};

module.exports = {
  findSmallestInSortedArr,
  findHighestNumberInSortedArr,
};
