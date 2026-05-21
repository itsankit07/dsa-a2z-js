/**
 * Problem : Left Rotate an Array by K ,Given an array, rotate the array to the left by k steps, where k is non-negative.
 * Link: https://www.geeksforgeeks.org/left-rotate-an-array-by-one-position/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (left roate by one position k times)
// Use a hash set to store unique elements and then convert it back to an array
// But this approach does not modify the input array in-place and uses extra space for the hash set
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function leftRotateByKBrute(arr, k) {
  k = k % arr.length; // Handle cases where k is larger than the array length
  for (let i = 0; i < k; i++) {
    const n = arr.length;
    const firstElement = arr[0];
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = firstElement;
  }
  return arr;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Reverse the array in three steps)
// 1. Reverse the first k elements
// 2. Reverse the remaining n-k elements
// 3. Reverse the entire array
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function leftRotateByKOptimal(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return arr;
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Brute:   ${leftRotateByKBrute([...arr], 4)}`);
  console.log(`  Optimal: ${leftRotateByKOptimal([...arr], 4)}`);
  console.log(`  Brute:   ${leftRotateByKBrute([...arr], 9)}`);
  console.log(`  Optimal: ${leftRotateByKOptimal([...arr], 9)}`);
});
