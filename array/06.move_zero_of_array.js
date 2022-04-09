const moveAllZeroOfArray = (nums = []) => {
  let totalZero = 0;
  let arrExcludeZeroValue = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      totalZero++;
    } else {
      arrExcludeZeroValue.push(nums[i]);
    }
  }

  return Array(totalZero).fill(0).concat(arrExcludeZeroValue);
};

const moveAllZeroOfArrayOptimized = (nums = []) => {
  let readIndex = nums.length - 1;
  let writeIndex = nums.length - 1;

  while (readIndex >= 0) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex--;
    }

    readIndex--;
  }

  while (writeIndex >= 0) {
    nums[writeIndex] = 0;
    writeIndex--;
  }

  return nums;
};

module.exports = {
  moveAllZeroOfArray,
  moveAllZeroOfArrayOptimized,
};
