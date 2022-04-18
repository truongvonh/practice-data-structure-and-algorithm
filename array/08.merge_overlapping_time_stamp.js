class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}
const mergeOverlappingTimeStamp = (v = []) => {
  const result = [];

  if (!v || !v.length) return result;

  result.push(new Pair(v[0].first, v[0].second));

  for (let i = 1; i < v.length; i++) {
    const isCollapsing = v[i].first <= result[result.length - 1].second;

    const isUpdateResultSecond = v[i].second > result[result.length - 1].second;

    if (isCollapsing && isUpdateResultSecond) {
      result[result.length - 1].second = v[i].second;
    } else if (v[i].first > result[result.length - 1].second) {
      result[result.length] = v[i];
    }
  }

  return result;
};

module.exports = {
  mergeOverlappingTimeStamp,
  Pair,
};
