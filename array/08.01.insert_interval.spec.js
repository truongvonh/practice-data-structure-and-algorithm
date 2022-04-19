const { insertInterval } = require("./08.01.insert_interval");

const testInsertIntervalFunction = ({ input, output }) => {
  const result = insertInterval(input);

  expect(result).toEqual(output);
};

describe("Unit tests for testInsertIntervalFunction", () => {
  it("testInsertIntervalFunction case #1", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [
          [1, 3],
          [6, 9],
        ],
        newInterval: [2, 5],
      },
      output: [
        [1, 5],
        [6, 9],
      ],
    });
  });

  it("testInsertIntervalFunction case #2", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        newInterval: [4, 8],
      },
      output: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    });
  });

  it("testInsertIntervalFunction case #3", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [],
        newInterval: [5, 7],
      },
      output: [[5, 7]],
    });
  });

  it("testInsertIntervalFunction case #4", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [
          [1, 5],
          [5, 7],
        ],
        newInterval: [1, 5],
      },
      output: [[1, 7]],
    });
  });

  it("testInsertIntervalFunction case #5", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [[1, 5]],
        newInterval: [6, 8],
      },
      output: [
        [1, 5],
        [6, 8],
      ],
    });
  });

  it("testInsertIntervalFunction case #6", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        newInterval: [4, 8],
      },
      output: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    });
  });

  it("testInsertIntervalFunction case #7", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [[1, 5]],
        newInterval: [0, 3],
      },
      output: [[0, 5]],
    });
  });

  it("testInsertIntervalFunction case #8", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [[1, 5]],
        newInterval: [0, 0],
      },
      output: [
        [0, 0],
        [1, 5],
      ],
    });
  });

  it("testInsertIntervalFunction case #9", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [[1, 5]],
        newInterval: [0, 6],
      },
      output: [[0, 6]],
    });
  });

  it("testInsertIntervalFunction case #10", () => {
    testInsertIntervalFunction({
      input: {
        intervals: [
          [1, 5],
          [6, 8],
        ],
        newInterval: [0, 9],
      },
      output: [[0, 9]],
    });
  });
});
