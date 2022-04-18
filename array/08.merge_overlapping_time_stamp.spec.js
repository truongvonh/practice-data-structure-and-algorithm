const { mergeOverlappingTimeStamp, Pair } = require("./08.merge_overlapping_time_stamp");

const testMergeOverlappingTimeStamp = ({ input, output }) => {
  const result = mergeOverlappingTimeStamp(input);

  expect(result).toEqual(output);
};

describe("Unit tests for mergeOverlappingTimeStamp function", () => {
  it("mergeOverlappingTimeStamp case #1", () => {
    testMergeOverlappingTimeStamp({
      input: [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6)],
      output: [new Pair(1, 7)],
    });
  });

  it("mergeOverlappingTimeStamp case #2", () => {
    testMergeOverlappingTimeStamp({
      input: [new Pair(1, 5), new Pair(4, 6), new Pair(6, 8), new Pair(11, 15)],
      output: [new Pair(1, 8), new Pair(11, 15)],
    });
  });

  it("mergeOverlappingTimeStamp case #3", () => {
    testMergeOverlappingTimeStamp({
      input: [new Pair(3, 7), new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)],
      output: [new Pair(3, 8), new Pair(10, 15)],
    });
  });

  it("mergeOverlappingTimeStamp case #4", () => {
    testMergeOverlappingTimeStamp({
      input: [new Pair(1, 5)],
      output: [new Pair(1, 5)],
    });
  });
});
