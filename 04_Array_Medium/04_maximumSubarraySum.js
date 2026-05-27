/**
 * Problem: Maximum Subarray Sum in an Array (Kadane's Algorithm)
 * Link : https://leetcode.com/problems/maximum-subarray/ , https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Check all subarrays and find the maximum sum)
// Generate all possible subarrays using nested loops and calculate their sums, keeping track of the maximum sum found.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function maximumSubarraySumBrute(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Kadane's Algorithm)
// Use a dynamic programming approach to find the maximum sum of a contiguous subarray.
// Take a current sum variable and a maximum sum variable.
// Iterate through the array and update the current sum and maximum sum based on the current element.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function maximumSubarraySumKadane(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0; // Reset current sum if it becomes negative
    }
  }

  return maxSum;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4], // Output: 6 (subarray [4,-1,2,1])
  [1], // Output: 1 (subarray [1])
  [5, 4, -1, 7, 8], // Output: 23 (subarray [5,4,-1,7,8])
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${maximumSubarraySumBrute([...arr])}]`);
  console.log(`  Optimal: [${maximumSubarraySumKadane([...arr])}]`);
});
