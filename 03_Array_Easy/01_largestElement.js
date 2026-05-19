/**
 * Problem: Largest Element in an Array
 * Link: https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Sorting)
// Sort the array and return the last element
// Time: O(n log n) | Space: O(1)
// ─────────────────────────────────────────────

function largestElementBrute(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Single Pass)
// Iterate through the array and keep track of the largest element
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function largestElementBetter(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [10], [-1, -2, -3], [0, 0, 0]];

testCases.forEach(arr => {
  console.log(`arr = [${arr.join(', ')}]`);
  console.log(`  Brute:   ${largestElementBrute([...arr])}`);
  console.log(`  Better:  ${largestElementBetter(arr)}`);
});

