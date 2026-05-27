/**
 * Problem: Maximum Subarray Sum in an Array (Kadane's Algorithm) - Print the subarray with the maximum sum.
 * Link : https://leetcode.com/problems/maximum-subarray/ , https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Optimal (Kadane's Algorithm)
// So In order to print the subarray with the maximum sum ,
// we will use two pointers to keep track of the start and end of the current subarray and
// update the maximum sum and the corresponding subarray whenever we find a new maximum sum.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function maximumSubarraySumKadane(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  let start = 0; // Start index of the current subarray
  let maxStart = 0; // Start index of the maximum sum subarray
  let maxEnd = 0; // End index of the maximum sum subarray

  for (let i = 0; i < arr.length; i++) {
    if (currentSum === 0) {
      start = i; // Update the start index of the current subarray
    }
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = start;
      maxEnd = i;
    }

    if (currentSum < 0) {
      currentSum = 0; // Reset current sum if it becomes negative
    }
  }

  console.log(`Subarray: [${arr.slice(maxStart, maxEnd + 1).join(", ")}]`);
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
  maximumSubarraySumKadane([...arr]);
});
