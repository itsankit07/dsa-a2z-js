/**
 * Problem : Given an array of integers and an integer k, return the total number of subarrays whose sum equals k. 
 * Link : https://leetcode.com/problems/subarray-sum-equals-k/ , https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// Calculate the sum of every possible subarray and check if it equals k.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function countSubarraysWithSumK(arr, k) {
  let count = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Using Hash Map)
// Use a hash map to store the frequency of prefix sums and count the number of subarrays that sum to k in O(n) time.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function countSubarraysWithSumKOptimal(arr, k) {
  const prefixSums = new Map();
  prefixSums.set(0, 1); // Initialize with sum 0 having frequency 1
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (prefixSums.has(sum - k)) {
      count += prefixSums.get(sum - k);
    }
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
  }

  return count;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
    [1, 1, 1],
    [1, 2, 3],
    [1, 1, 1, 1],
    [1, -1, 0],
    [3, 4, 7, 2, -3, 1, 4, 2],
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${countSubarraysWithSumK([...arr], 2)}]`);
  console.log(`  Optimal: [${countSubarraysWithSumKOptimal([...arr], 2)}]`);
});
