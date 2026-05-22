/**
 * Problem: Given an array that contains only 0 and 1 , find the maximum number of consecutive 1s in this array.
 * Link: https://leetcode.com/problems/max-consecutive-ones/ , https://www.geeksforgeeks.org/problems/max-consecutive-one/1
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Optimal 
// Traverse the array and count the number of consecutive 1s, updating the maximum count whenever a 0 is encountered
// Time O(n) | Space: O(1)
// ─────────────────────────────────────────────

function maximumConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 1, 0, 1, 1, 1],
  [0, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Maximum Consecutive 1s: ${maximumConsecutiveOnes(arr)}`);
});
