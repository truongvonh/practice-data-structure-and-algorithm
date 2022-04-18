const {
  findTheBiggestProfit,
  findSellAndBuyValuePriceForBiggestProfit,
} = require("./07.find_biggest_profit");

const testfindTheBiggestProfitFunction = (input, output) => {
  const result = findTheBiggestProfit(input);

  expect(result).toBe(output);
};

const testFindSellAndBuyValuePriceForBiggestProfit = (input, output) => {
  const result = findSellAndBuyValuePriceForBiggestProfit(input);

  expect(result).toEqual(output);
};

describe("unit tests for findTheBiggestProfit function", () => {
  it("findTheBiggestProfit with case #5", () => {
    testfindTheBiggestProfitFunction([7, 1, 5, 3, 6, 4], 5);
  });

  it("findTheBiggestProfit with case #6", () => {
    testfindTheBiggestProfitFunction([7, 6, 4, 3, 1], 0);
  });
});

describe("Unit tests for findSellAndBuyPriceForBiggestProfit", () => {
  it("findSellAndBuyPriceForBiggestProfit with case #1", () => {
    testFindSellAndBuyValuePriceForBiggestProfit([1, 2, 3, 4, 3, 2, 1, 2, 5], {
      buy: 1,
      sell: 5,
    });
  });

  it("testFindSellAndBuyValuePriceForBiggestProfit with case #2", () => {
    testFindSellAndBuyValuePriceForBiggestProfit([8, 6, 5, 4, 3, 2, 1], {
      buy: 6,
      sell: 5,
    });

    // i = 1: buy = 8, sell = 6 => globalProfit = -2, currentSell = 6, currentProfit = -2
    // i = 2: buy = 8, sell = 6 => globalProfit = -2, currentSell = 5, currentProfit = -3
  });

  it.skip("findSellAndBuyPriceForBiggestProfit with case #3", () => {
    testFindSellAndBuyValuePriceForBiggestProfit([12, 30, 40, 90, 110], {
      buy: 12,
      sell: 110,
    });
  });

  it.skip("fifafdadndSellAndBuyPriceForBiggestProfit with case #4", () => {
    testFindSellAndBuyValuePriceForBiggestProfit([2], {
      buy: -1,
      sell: -1,
    });
  });
});
