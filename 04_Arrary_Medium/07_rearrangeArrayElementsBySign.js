/**
 * Problem: Rearrange Array Elements by Sign
 * Link : https://leetcode.com/problems/rearrange-array-elements-by-sign/ , https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force
// Use two separate arrays to store positive and negative numbers.
// Iterate through the original array and fill the positive and negative arrays.
// Then, merge the two arrays back into the original array in alternating order.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function rearrangeArrayBrute(arr) {
  const positive = [];
  const negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  let posIndex = 0;
  let negIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && posIndex < positive.length) {
      arr[i] = positive[posIndex++];
    } else if (negIndex < negative.length) {
      arr[i] = negative[negIndex++];
    }
  }
  return arr;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal
// Use two pointers to rearrange the elements in-place.
// Iterate through the array and swap elements to ensure that positive and negative numbers are in alternating positions.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function rearrangeArrayOptimal(arr) {
  let posIndex = 0;
  let negIndex = 1;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      res[posIndex] = arr[i];
      posIndex += 2;
    } else {
      res[negIndex] = arr[i];
      negIndex += 2;
    }
  }
  return res;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [3, 1, -2, -5, 2, -4], // Output: [3, -2, 1, -5, 2, -4]
  [-1, 1], // Output: [1, -1]
  [-5, -2, 5, 2], // Output: [5, -5, 2, -2]
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${rearrangeArrayBrute([...arr])}]`);
  console.log(`  Optimal: [${rearrangeArrayOptimal([...arr])}]`);
});
