/**
 * Problem : Given an array and a value x, search for x in arr and return the index of first occurrence of x in arr. If not found, return -1.
 * Link: https://www.geeksforgeeks.org/linear-search/
 * Difficulty: Easy
 * Topic: Array / Easy
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Linear Search)
// Iterate through the array and check if the current element is equal to x. If found, return the index.
// If not found after iterating through the entire array, return -1.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

    
// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 1, 1, 1],
  [2, 3, 4, 5],
];

testCases.forEach((arr) => {
  console.log(`arr = [${arr.join(", ")}]`);
  console.log(`  Found 3 at Index: ${linearSearch([...arr], 3) >= 0 ? linearSearch([...arr], 3) : "Not Found"}`);
});
