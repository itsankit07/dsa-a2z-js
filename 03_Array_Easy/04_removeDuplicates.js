/**
 * Problem: Given a sorted array ,remove the duplicates in-place such that each element appears only once and returns the new length.
 * Link: https://www.geeksforgeeks.org/remove-duplicates-sorted-array/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Hash Set)
// Use a hash set to store unique elements and then convert it back to an array
// But this approach does not modify the input array in-place and uses extra space for the hash set
// Time: O(n) | Space: O(n)
// ─────────────────────────────────────────────

function removeDuplicatesBrute(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Two Pointers)
// Take two pointers, one for iterating through the array and another for keeping track of the position of the next unique element
// take i = 0 and j = 1 to n - 1, if(arr[i]===arr[j]) continue ,  else if arr[i] is not equal to arr[j],
// then we have found a unique element, so we move i to the next position and copy the unique element to that position.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function removeDuplicatesOptimal(arr) {
  const n = arr.length;
  if (n == 0) return 0;
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
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
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Brute:   ${removeDuplicatesBrute([...arr])}`);
  const index = removeDuplicatesOptimal(arr);
  console.log(`  Optimal: [${arr.slice(0, index).join(", ")}]`);
});
