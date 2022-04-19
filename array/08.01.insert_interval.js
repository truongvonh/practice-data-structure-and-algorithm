const insertInterval = ({ intervals = [], newInterval = [] }) => {
  if (!intervals || !intervals.length) {
    return [newInterval];
  }
  const isPrepend = newInterval[1] < intervals[0][0];

  if (isPrepend) {
    intervals.unshift(newInterval);
    return intervals;
  }

  const isNewIntervalWrapArray =
    newInterval[0] < intervals[0][0] && newInterval[1] > intervals[intervals.length - 1][1];

  if (isNewIntervalWrapArray) {
    return [newInterval];
  }

  const result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    let resultByCurrentLength = result[result.length - 1];

    const isMergeNewInterval =
      resultByCurrentLength[1] >= newInterval[0] && newInterval[1] > resultByCurrentLength[1];

    const isSkipMergeIntervals =
      resultByCurrentLength[0] >= intervals[i][0] && resultByCurrentLength[1] >= intervals[i][1];

    const isUpdateSecondCurrentResult =
      resultByCurrentLength[1] >= intervals[i][0] && intervals[i][1] > resultByCurrentLength[1];

    const isUpdateFirstCurrentResult =
      resultByCurrentLength[0] > newInterval[0] && newInterval[1] <= resultByCurrentLength[1];

    const isAppendNewInterval = newInterval[0] > intervals[intervals.length - 1][1];

    const isUpdateCurrentResult =
      newInterval[0] < resultByCurrentLength[0] && newInterval[1] > resultByCurrentLength[1];

    if (isUpdateCurrentResult) {
      result[result.length - 1] = newInterval;
    }

    if (isMergeNewInterval) {
      resultByCurrentLength[1] = newInterval[1];
    } else if (isUpdateSecondCurrentResult) {
      resultByCurrentLength[1] = intervals[i][1];
    } else if (isUpdateFirstCurrentResult) {
      resultByCurrentLength[0] = newInterval[0];
    } else if (!isSkipMergeIntervals) {
      result[result.length] = intervals[i];
    } else if (isAppendNewInterval) {
      result[result.length] = newInterval;
    }
  }

  return result;
};

module.exports = {
  insertInterval,
};
