const rotateArray = (arr = [], k) => {
  const maxArrIndex = arr.length;
  const rotate = k > 0 ? arr.slice(maxArrIndex - k) : arr.slice(0, -k);

  for (let i = 0; i < Math.abs(k); i++) {
    if (k > 0) {
      arr.pop();
    } else {
      arr.shift();
    }
  }

  const result = k > 0 ? [...rotate, ...arr] : [...arr, ...rotate];
  return result;
};

module.exports = {
  rotateArray,
};
