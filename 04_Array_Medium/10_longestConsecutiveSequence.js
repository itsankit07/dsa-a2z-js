/**
 * Problem: Given an array of integers , find the length of the longest consecutive elements sequence.
 * Link : https://leetcode.com/problems/longest-consecutive-sequence/ , https://www.geeksforgeeks.org/longest-consecutive-subsequence/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// For every element x , check if x+1, x+2, ... are present in the array and count the length of the sequence.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function longestConsecutiveBrute(arr) {
  let maxLength = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let currentLength = 1;
    let currentNum = arr[i];

    while (arr.includes(currentNum + 1)) {
      currentNum++;
      currentLength++;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Sorting)
// Sort the array and find the longest consecutive sequence.
// Time: O(n log n) | Space: O(1)
// ─────────────────────────────────────────────

function longestConsecutiveSorting(arr) {
  if (arr.length === 0) return 0;

  arr.sort((a, b) => a - b);
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if(arr[i]   === arr[i - 1]) {
      continue; // Skip duplicates
    }
    if (arr[i] === arr[i - 1] + 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return Math.max(maxLength, currentLength);
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Hash Set)
// Use a hash set to store all elements and then iterate through the set to find the longest consecutive sequence.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function longestConsecutiveOptimal(arr) {
  const numSet = new Set(arr);
  let maxLength = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
  

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
    [100, 4, 200, 1, 3, 2],
    [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    [1, 2, 0, 1],
    [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6],
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${longestConsecutiveBrute([...arr])}]`);
  console.log(`  Better:  [${longestConsecutiveSorting([...arr])}]`);
  console.log(`  Optimal: [${longestConsecutiveOptimal([...arr])}]`);
});
