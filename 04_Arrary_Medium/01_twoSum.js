/**
 * Problem: Two Sum : Check if a pair with given sum exists in Array
 * Link: https://leetcode.com/problems/two-sum/ , https://www.geeksforgeeks.org/find-a-pair-with-the-given-sum-in-an-array/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (check all pairs , nested loops)
// Check all possible pairs and calculate their sums. Keep track of the pair that sums to k.
// Time: 0(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function twoSumBrute(arr, k) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === k) {
                return [i, j];
            }
        }
    }
    return null;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Hashing)
// Use a hash set to store the elements of the array. 
// For each element x, check if (k-x) exists in the set.
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function twoSumHash(arr, k) {
    const numSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        const rem = k - arr[i];
        if (numSet.has(rem)) {
            return [arr.indexOf(rem), i];
        }
        numSet.add(arr[i]);
    }
    return null;
}


// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Two Pointers) - Only for sorted arrays.
// Sort the array and use two pointers to find the pair that sums to k.
// Time: O(n log n) | Space: O(1)
// ─────────────────────────────────────────────

function twoSumTwoPointers(arr, k) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === k) {
      return [left, right];
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  { array: [1, 2, 3, 4, 5], target: 3 },
  { array: [1, 1, 2, 3], target: 2 },
  { array: [2, 7, 11, 15], target: 9 },
];

testCases.forEach(({ array, target }) => {
  console.log(`arr = [${array.join(", ")}] | target = ${target}`);
  console.log(`  Brute:   ${twoSumBrute(array, target)}`);
  console.log(`  Better:  ${twoSumHash(array, target)}`);
  console.log(`  Optimal: ${twoSumTwoPointers(array, target)}`);
});
