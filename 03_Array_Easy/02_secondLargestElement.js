/**
 * Problem: Find Second Largest Element in an Array
 * Link: https://www.geeksforgeeks.org/find-second-largest-element-array/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Sorting)
// Sort the array and return the second last element
// Time: O(n log n) | Space: O(1)
// ─────────────────────────────────────────────

function secondLargestElementBrute(arr) {
  const n = arr.length;
  if (n == 0 || n == 1) return -1;
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Double Pass)
// Perform a single traversal to find the largest element, then another traversal to find the second largest element
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function secondLargestElementBetter(arr) {
  const n = arr.length;
  if (n == 0 || n == 1) return -1;
  let largest = -Infinity,
    secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Single Pass)
// Perform a single traversal to find the largest and second largest elements
// Take two variables, largest and secondLargest, and update them accordingly while traversing the array
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function secondLargestElementOptimal(arr) {
  const n = arr.length;
  if (n == 0 || n == 1) return -1;
  let largest = -Infinity,
    secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [10],
  [-1, -2, -3],
  [0, 0, 0],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Brute:   ${secondLargestElementBrute([...arr])}`);
  console.log(`  Better:  ${secondLargestElementBetter(arr)}`);
  console.log(`  Optimal: ${secondLargestElementOptimal(arr)}`);
});
