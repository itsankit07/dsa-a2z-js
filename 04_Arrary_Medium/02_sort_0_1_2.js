/**
 * Problem: Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order.
 * Link : https://leetcode.com/problems/sort-colors/ , https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Sort the array)
// Sort the array using built-in sort function or any sorting algorithm.
// Time: O(n log n) | Space: O(1) or O(n) depending on the sorting algorithm used.
// ─────────────────────────────────────────────

function sort012Brute(arr) {
  return arr.sort((a, b) => a - b);
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Counting Sort)
// Count the number of 0s, 1s, and 2s in the array and then overwrite the original array based on the counts.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function sort012Counting(arr) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;
  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  let index = 0;
  while (count0 > 0) {
    arr[index++] = 0;
    count0--;
  }
  while (count1 > 0) {
    arr[index++] = 1;
    count1--;
  }
  while (count2 > 0) {
    arr[index++] = 2;
    count2--;
  }
  return arr;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Dutch National Flag Algorithm)
// Use three pointers to partition the array into three sections: one for 0s, one for 1s, and one for 2s.
// arr[0..low-1] = 0s, arr[low..mid-1] = 1s, arr[mid..high] = unknown, arr[high+1..n-1] = 2s
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function sort012DutchFlag(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [2, 0, 2, 1, 1, 0],
  [0, 1, 2, 0, 1, 2],
  [2, 2, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [2, 1, 0],
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${sort012Brute([...arr]).join(", ")}]`);
  console.log(`  Better:  [${sort012Counting([...arr]).join(", ")}]`);
  console.log(`  Optimal: [${sort012DutchFlag([...arr]).join(", ")}]`);
});
