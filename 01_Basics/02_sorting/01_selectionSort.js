/**
 * Problem: Selection Sort
 * Link: https://www.geeksforgeeks.org/problems/selection-sort/1
 * Difficulty: Easy
 * Topic: Sorting
 *
 * Idea: Divide array into sorted and unsorted parts.
 * In each pass, find the minimum element from the unsorted
 * part and swap it to its correct position at the start.
 *
 * Example:
 * [13, 46, 24, 52, 20, 9]
 * pass 1 → min = 9  → [9,  46, 24, 52, 20, 13]
 * pass 2 → min = 13 → [9,  13, 24, 52, 20, 46]
 * pass 3 → min = 20 → [9,  13, 20, 52, 24, 46]
 * pass 4 → min = 24 → [9,  13, 20, 24, 52, 46]
 * pass 5 → min = 46 → [9,  13, 20, 24, 46, 52]
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force
// For each position, collect unsorted elements,
// find min, rebuild array — not in-place
// Time: O(n²) | Space: O(n)
// ─────────────────────────────────────────────
function selectionSortBrute(arr) {
  const result = [...arr];
  const sorted = [];

  while (result.length) {
    const minVal = Math.min(...result);
    sorted.push(minVal);
    result.splice(result.indexOf(minVal), 1);
  }

  return sorted;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (In-place Selection Sort)
// For each index i, find min in remaining unsorted
// portion [i+1...n-1] and swap with index i
// Time: O(n²) | Space: O(1)
// ─────────────────────────────────────────────
function selectionSortOptimal(arr) {
  const result = [...arr]; // copy to avoid mutating original
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    // find minimum element in unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIdx]) {
        minIdx = j;
      }
    }

    // swap only if a smaller element was found
    if (minIdx !== i) {
      [result[i], result[minIdx]] = [result[minIdx], result[i]];
    }
  }

  return result;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [13, 46, 24, 52, 20, 9],   // regular case
  [1],                        // single element
  [1, 2, 3, 4, 5],           // already sorted
  [5, 4, 3, 2, 1],           // reverse sorted
  [3, 3, 2, 1, 2],           // duplicates
  [],                         // empty array
];

testCases.forEach(arr => {
  console.log(`Input:   [${arr}]`);
  console.log(`  Brute:   [${selectionSortBrute(arr)}]`);
  console.log(`  Optimal: [${selectionSortOptimal(arr)}]`);
});