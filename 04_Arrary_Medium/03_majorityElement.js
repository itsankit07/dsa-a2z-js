/**
 * Problem: Find the Majority Element that occurs more than N/2 times
 * Link : https://leetcode.com/problems/sort-colors/ , https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Sort the array and find the middle element)
// Sort the array using built-in sort function or any sorting algorithm.
// Its not important that the majority element is at the middle index after sorting, 
// but it will always be present at the middle index if it exists.
// Time: O(n log n) | Space: O(1) or O(n) depending on the sorting algorithm used.
// ─────────────────────────────────────────────

function majorityElementBrute(arr) {
  arr.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Hashing)
// Count the occurrences of each element and return the one that occurs more than N/2 times.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function majorityElementHashing(arr) {
  const count = {};
  const n = arr.length;
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > Math.floor(n / 2)) {
      return num;
    }
  }
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Moore's Voting Algorithm)
// Use a candidate and a counter to find the majority element.
// Take a counter variable and a candidate variable.
// Iterate through the array and update the candidate and counter based on the current element.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function majorityElementMoore(arr) {
  let candidate = null;
  let count = 0;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Optional: Verify if the candidate is actually the majority element

  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }
  return count > Math.floor(arr.length / 2) ? candidate : null;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [3, 2, 3],
  [2, 2, 1, 1, 1, 2, 2],
  [1, 1, 1, 3],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${majorityElementBrute([...arr])}]`);
  console.log(`  Better:  [${majorityElementHashing([...arr])}]`);
  console.log(`  Optimal: [${majorityElementMoore([...arr])}]`);
});
