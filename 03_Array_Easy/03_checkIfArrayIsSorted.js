/**
 * Problem: Check if an Array is Sorted
 * Link: https://www.geeksforgeeks.org/problems/check-if-array-is-sorted/1
 * Difficulty: Easy
 * Topic: Array / Easy
 */


// ─────────────────────────────────────────────
// APPROACH 1 — 
// Check if current element is smaller than next element, if not return false
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────


function isSorted(arr) {
  const  n = arr.length;
  for (let i = 1; i < n-1; i++) {
    if (arr[i] > arr[i+1]) {
        return false;
    }
  }
  return true;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [10], [-1, -2, -3], [0, 0, 0]];

testCases.forEach(arr => {
  console.log(`arr = [${arr.join(', ')}]`);
  console.log(`  Output:  ${isSorted(arr)}`);
});

