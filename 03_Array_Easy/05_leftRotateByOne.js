/**
 * Problem: Given an array, rotate the array to the left by one position in-place.
 * Link: https://www.geeksforgeeks.org/left-rotate-an-array-by-one-position/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1
// Store the first element in a temporary variable,
// shift all elements to the left by one position,
// and then place the first element at the end of the array
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function leftRotateByOne(arr) {
  const n = arr.length;
  if (n <= 1) return;
  const temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 1, 2],
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 1, 1, 1],
];

testCases.forEach((arr) => {
  leftRotateByOne(arr);
  console.log(`  Left Rotated: [${arr.join(", ")}]`);
});
