/**
 * Problem : Given an array of integers, move all the 0's to the end of it while maintaining the relative order of the non-zeroes.
 * Link: https://www.geeksforgeeks.org/move-zeroes-to-end-of-array/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Use a Temporary Array)
// Use a temporary array to store non-zero elements and then fill the original array with non-zero elements followed by zeros
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function moveZeroesToEndBrute(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i] || 0;
  }
  return arr;
}

// ─────────────────────────────────────────────
// APPROACH 2 - Optimal ()
// Use two pointers, one for iterating through the array and another for keeping track of the position of the next non-zero element.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function moveZeroesToEndOptimal(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }
  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex] = 0;
    nonZeroIndex++;
  }
  return arr;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [0, 1, 0, 3, 12],
  [0, 0, 1],
  [0, 0, 1, 0, 3, 12],
  [0, 0, 0, 0],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
    console.log(`  Brute:   ${moveZeroesToEndBrute([...arr])}`);
    console.log(`  Optimal: ${moveZeroesToEndOptimal([...arr])}`);
});
