/*
Problem Name: Best Time to Buy and Sell Stock
Description:
  You are given an array where each element represents the price of a stock on a given day.
  You want to maximize your profit by choosing a single day to buy the stock and another later day to sell it.
  Return the maximum profit you can achieve. If no profit is possible, return 0.

Example:
  Input: [7, 1, 5, 3, 6, 4]
  Output: 5   // Buy on day 2 (price=1), sell on day 5 (price=6)

  Input: [7, 6, 4, 3, 1]
  Output: 0   // Prices always fall, so no profit is possible.

Time Complexity:
  O(n) → because we only need to go through the prices once.
Space Complexity:
  O(1) → only variables for minPrice and maxProfit are used.
*/

function bestTimeToBuyAndSellStock(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

console.log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1]));
