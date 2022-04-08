const moveAllZeroOfArray = (nums = []) => {
  let totalZero = 0;
  let arrExcludeZeroValue = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      totalZero++;
    } else {
      arrExcludeZeroValue.push(arr[i]);
    }
  }

  return Array(totalZero).fill(0).concat(arrExcludeZeroValue);
};

const moveAllZeroOfArrayOptimized = (nums = []) => {};

module.exports = {
  moveAllZeroOfArray,
  moveAllZeroOfArrayOptimized,
};
