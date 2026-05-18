/**
 * Problem: Quick Sort
 * Link: https://www.geeksforgeeks.org/problems/quick-sort/1
 * Difficulty: Medium
 * Topic: Sorting
 *
 * Idea: Quick Sort is a divide-and-conquer algorithm. It selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, 
 * according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
 * 
 * Example:
 * [13, 46, 24, 52, 20, 9] - choose pivot (e.g., 20) → partition into [13, 9] and [46, 24, 52]
 * sort left half → [9, 13] - choose pivot (e.g., 9) → partition into [] and [13]
 * sort right half → [24, 46, 52] - choose pivot (e.g., 46) → partition into [24] and [52]
 * combine sorted halves → [9, 13, 20, 24, 46, 52]
 */

// ─────────────────────────────────────────────
// In Quick Sort, we recursively divide the array into sub-arrays based on a pivot element until we reach arrays of size 1 (which are inherently sorted).
// We then combine these sorted sub-arrays back together in the correct order.
// Time: O(n log n) for best and average cases, O(n^2) for worst case (when the smallest or largest element is always chosen as the pivot) |
// Space: O(log n) on average due to recursive stack space, O(n) in worst case
// ─────────────────────────────────────────────

function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}


// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [13, 46, 24, 52, 20, 9], // regular case
  [1], // single element
  [1, 2, 3, 4, 5], // already sorted
  [5, 4, 3, 2, 1], // reverse sorted
  [3, 3, 2, 1, 2], // duplicates
  [], // empty array
];

testCases.forEach((arr) => {
  console.log(`Input:   [${arr}]`);
  console.log(`Sorted Array : [${quickSort(arr, 0, arr.length - 1)}]`);
});
