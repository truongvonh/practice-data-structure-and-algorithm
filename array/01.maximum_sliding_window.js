function getMaximumOfSubArray(arr = [], k = 3) {
  const result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    const subArray = arr.slice(i, i + k);
    result.push(Math.max(...subArray));
  }
  return result;
}

module.exports = {
  getMaximumOfSubArray,
};
