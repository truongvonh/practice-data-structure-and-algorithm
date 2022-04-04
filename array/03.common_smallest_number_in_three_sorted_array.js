const commonSmallestNumberInThreeSortedArray = (
  firstArr = [],
  secondArr = [],
  thirdArr = []
) => {
  let f = 0;
  let s = 0;
  let t = 0;

  while (f < firstArr.length && s < secondArr.length && t < thirdArr.length) {
    if (firstArr[f] === secondArr[s] && secondArr[s] === thirdArr[t]) {
      return firstArr[f];
    }

    if (firstArr[f] <= secondArr[s] && firstArr[f] <= thirdArr[t]) {
      f++;
    } else if (secondArr[s] <= thirdArr[t] && secondArr[s] <= firstArr[f]) {
      s++;
    } else if (thirdArr[t] <= secondArr[s] && thirdArr[t] <= firstArr[f]) {
      t++;
    }
  }

  return -1;
};

module.exports = {
  commonSmallestNumberInThreeSortedArray,
};
