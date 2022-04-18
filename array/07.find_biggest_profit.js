const findTheBiggestProfit = (prices = []) => {
  let buyIndex = 0;
  let sellIndex = 1;

  let globalProfit = 0;

  while (sellIndex < prices.length) {
    const sellCurrent = prices[sellIndex];
    const buyCurrent = prices[buyIndex];

    const isLossMoney = sellCurrent < buyCurrent;

    let currentProfit = sellCurrent - buyCurrent;

    if (isLossMoney) {
      buyIndex = sellIndex;
      sellIndex++;
    } else {
      if (globalProfit < currentProfit) {
        globalProfit = currentProfit;
      }
      sellIndex++;
    }
  }

  return globalProfit;
};

const findSellAndBuyValuePriceForBiggestProfit = (prices = []) => {
  let buy = prices[0];
  let sell = prices[1];

  let globalProfit = sell - buy;
  let currentProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentSell = prices[i];

    globalProfit = sell - buy;
    currentProfit = currentSell - buy;

    const previousCurrentProfit = prices[i - 1] - buy;
    const isLossMoney = globalProfit === previousCurrentProfit && currentProfit < globalProfit;

    if (isLossMoney) {
      buy = sell;
      sell = currentSell;
      console.log({ currentSell, nextValue: prices[i++], globalProfit, buy, sell });
      globalProfit = sell - buy;
    }
  }

  return {
    buy,
    sell,
  };
};

module.exports = {
  findTheBiggestProfit,
  findSellAndBuyValuePriceForBiggestProfit,
};
