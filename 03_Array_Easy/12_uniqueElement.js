/**
 * Problem: Given an non-empty array of integers , every element appears twice except for one. Find that single one.
 * Link: https://leetcode.com/problems/single-number/ , https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-sorted-array/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// Select the element and check if it appears again in the array, using two nested loops.
// Time: 0(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function uniqueElementBrute(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let isUnique = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) return arr[i];
  }
  return -1;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Hashing)
// Use a hash map to count occurrences of each element.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function uniqueElementBetter(arr) {
  const count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let num in count) {
    if (count[num] === 1) return parseInt(num);
  }
  return -1;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Bit Manipulation)
// Use the XOR operation to find the unique element. 
// XOR of a number with itself is 0 and XOR of a number with 0 is the number itself.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function uniqueElementOptimal(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
    [2, 2, 1],  
    [4, 1, 2, 1, 2],
    [1],
    [0, 0, 0, 0, 5],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Brute:   ${uniqueElementBrute([...arr])}`);
  console.log(`  Better:  ${uniqueElementBetter(arr)}`);
  console.log(`  Optimal: ${uniqueElementOptimal(arr)}`);
});
