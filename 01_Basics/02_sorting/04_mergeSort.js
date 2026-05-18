/**
 * Problem: Merge Sort
 * Link: https://www.geeksforgeeks.org/problems/merge-sort/1
 * Difficulty: Medium
 * Topic: Sorting
 *
 * Idea: Merge Sort is a divide-and-conquer algorithm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves.
 *
 * Example:
 * [13, 46, 24, 52, 20, 9] - divide into [13, 46, 24] and [52, 20, 9]
 * sort left half → [13, 24, 46] - divide into [13] and [46, 24]
 * sort right half → [9, 20, 52] - divide into [52] and [20, 9]
 * merge sorted halves → [9, 13, 20, 24, 46, 52]
 * ─────────────────────────────────────────────
 */

// ─────────────────────────────────────────────
// In Merge Sort, we recursively divide the array into halves until we reach arrays of size 1 (which are inherently sorted).
// We then merge these sorted halves back together in the correct order.
// Time: O(n log n) for best, average and worst cases | Space: O(n) due to temporary arrays used during merging
// ─────────────────────────────────────────────

function merge(left, right) {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }

  res.push(...left.slice(leftIndex));
  res.push(...right.slice(rightIndex));

  return res;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
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
  console.log(`Sorted Array : [${mergeSort(arr)}]`);
});
