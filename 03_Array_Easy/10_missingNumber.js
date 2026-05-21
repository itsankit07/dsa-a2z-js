/**
 * Problem : Given an array of size n-1 with distinct integers in the range of 1 to n. Find the missing number in the array.
 * Link: https://www.geeksforgeeks.org/find-the-missing-number/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Optimal (Using Sum Formula)
// Calculate the expected sum of numbers from 1 to n using the formula n(n + 1) / 2.
// Subtract the actual sum of the array elements from it.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function missingNumberSum(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// ─────────────────────────────────────────────
// APPROACH 2 - Using XOR
// XOR of two same numbers is 0, and XOR of a number with 0 is the number itself.
// So, XOR all numbers from 1 to n and XOR all elements in the array. The result will be the missing number.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function missingNumberXOR(arr) {
  const n = arr.length + 1;
  let xorAll = 0;
  let xorArray = 0;

  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    xorAll ^= i;
  }

  // XOR all elements in the array
  for (let num of arr) {
    xorArray ^= num;
  }

  // The missing number is the XOR of both results
  return xorAll ^ xorArray;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [1, 2, 4, 5], // Missing number is 3
  [1, 3, 4], // Missing number is 2
  [2, 3, 4], // Missing number is 1
  [1, 2, 3], // Missing number is 4
  [1, 2, 3, 5], // Missing number is 4
];

testCases.forEach((testCase) => {
  console.log(`Input: ${testCase}`);
  console.log(`Missing Number (Sum): ${missingNumberSum(testCase)}`);
  console.log(`Missing Number (XOR): ${missingNumberXOR(testCase)}`);
});
