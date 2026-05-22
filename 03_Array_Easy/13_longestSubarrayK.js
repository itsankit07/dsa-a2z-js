/**
 * Problem: Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k(positives). If no such sub-array exists, return 0.
 * Link: https://leetcode.com/problems/longest-subarray-with-sum-k-positives/ , https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Check all subarrays)
// Check all possible sub-arrays and calculate their sums. Keep track of the longest one that sums to k.
// Time: 0(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function longestSubarraySumK(arr, k) {
  const n = arr.length;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += arr[j];
      if (currentSum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Hashing) - Optimal for both positives and negatives.
// Use a hash map to store the cumulative sum and its index.
// For each element, calculate the cumulative sum and check if (cumulative sum - k) exists in the hash map.
// If it does, update the maximum length of the sub-array.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function longestSubarraySumKOptimal(arr, k) {
  const sumIndexMap = new Map();
  sumIndexMap.set(0, -1); // Initialize with sum 0 at index -1
  let cumulativeSum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    cumulativeSum += arr[i];
    const targetSum = cumulativeSum - k;
    if (sumIndexMap.has(targetSum)) {
      const currentLength = i - sumIndexMap.get(targetSum);
      maxLength = Math.max(maxLength, currentLength);
    }
    if (!sumIndexMap.has(cumulativeSum)) {
      sumIndexMap.set(cumulativeSum, i);
    }
  }
  return maxLength;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Two Pointers) - Only for positives.
// Use two pointers to maintain a sliding window. Expand the right pointer to increase the sum and move the left pointer to decrease the sum until it equals k.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function longestSubarraySumKTwoPointers(arr, k) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    while (currentSum > k && left <= right) {
      currentSum -= arr[left];
      left++;
    }
    if (currentSum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }
  return maxLength;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 2, 3, 4, 5], // Expected: 2 (sub-array [1, 2])
  [1, 1, 1, 1], // Expected: 3 (sub-array [1, 1, 1])
  [1, 2, 1, 2, 1], // Expected: 2 (sub-array [1, 2])
  [1, 2, 3, 4], // Expected: 2 (sub-array [1, 2])
  [1, 1, 1, 1, 1], // Expected: 3 (sub-array [1, 1, 1])
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Brute:   ${longestSubarraySumK(arr, 3)}`);
  console.log(`  Better:  ${longestSubarraySumKOptimal(arr, 3)}`);
  console.log(`  Optimal: ${longestSubarraySumKTwoPointers(arr, 3)}`);
});
