/**
 * Problem: Best Time to Buy and Sell Stock
 * Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ , https://www.geeksforgeeks.org/stock-buy-sell/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// Check all pairs of days and calculate the profit, keeping track of the maximum profit found using nested loops.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function maximumProfitBrute(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Single Pass)
// Use a single pass to find the minimum price and maximum profit.
// Iterate through the array and update the minimum price and maximum profit based on the current price.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function maximumProfitOptimal(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [7, 1, 5, 3, 6, 4], // Output: 5 (buy at price 1, sell at price 6)
  [7, 6, 4, 3, 1], // Output: 0 (no profitable transaction possible)
  [1, 2, 3, 4, 5], // Output: 4 (buy at price 1, sell at price 5)
];

testCases.forEach((prices) => {
  console.log(`Original: [${prices.join(", ")}]`);
  console.log(`  Brute:   [${maximumProfitBrute([...prices])}]`);
  console.log(`  Optimal: [${maximumProfitOptimal([...prices])}]`);
});
