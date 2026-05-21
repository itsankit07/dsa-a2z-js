/**
 * Problem : Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
 * Link: https://www.geeksforgeeks.org/union-of-two-sorted-arrays/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Using map or set to store unique elements)
// Iterate through both arrays and add elements to a set to ensure uniqueness
// then convert the set back to an array and sort it.
// Time: O((n + m) log(n + m)) | Space: O(n + m)
// ─────────────────────────────────────────────

function unionOfTwoSortedArraysBrute(arr1, arr2) {
  const set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    set.add(arr2[i]);
  }
  const result = Array.from(set).sort((a, b) => a - b);
  return result;
}

// ─────────────────────────────────────────────
// APPROACH 2 - Optimal (Two Pointers)
// Use two pointers to traverse both arrays and merge them while maintaining the sorted order and uniqueness.
// Time: O(n + m) | Space: O(n + m)
// ─────────────────────────────────────────────

function unionOfTwoSortedArraysOptimal(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // Check if the current element is different from the last added element to avoid duplicates
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      // Check if the current element is different from the last added element to avoid duplicates
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    } else {
        // If both elements are equal, add it to the result and move both pointers
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  // Add any remaining elements from either array
  while (i < arr1.length) {
    if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }
  return result;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  { arr1: [1, 2, 4, 5, 6], arr2: [3, 4, 5, 6, 7] },
  { arr1: [1, 2, 3], arr2: [4, 5, 6] },
  { arr1: [1, 2, 3], arr2: [1, 2, 3] },
  { arr1: [], arr2: [1, 2, 3] },
  { arr1: [1, 2, 3], arr2: [] },
];

testCases.forEach(({ arr1, arr2 }, index) => {
  console.log(`Test Case ${index + 1}:`);
  console.log(`Brute Force Result: ${unionOfTwoSortedArraysBrute(arr1, arr2)}`);
  console.log(`Optimal Result: ${unionOfTwoSortedArraysOptimal(arr1, arr2)}`);
  console.log("-----------------------------");
});
