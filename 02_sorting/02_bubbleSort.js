/**
 * Problem: Bubble Sort
 * Link: https://www.geeksforgeeks.org/problems/bubble-sort/1
 * Difficulty: Easy
 * Topic: Sorting
 *
 * Idea: Repeatedly step through the list, compare adjacent elements and swap them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 *
 * Example:
 * [13, 46, 24, 52, 20, 9]   - first pass compares 13 & 46 (no swap)
 * pass 1 → [13, 24, 46, 20, 9, 52] - compares 46 & 24 (swap), then 46 & 52 (no swap) , then 52 & 20 (swap), then 52 & 9 (swap)
 * pass 2 → [13, 24, 20, 9, 46, 52] - compares 13 & 24 (no swap), then 24 & 20 (swap), then 24 & 9 (swap), then 24 & 46 (no swap) , then 46 & 52 (no swap)
 * pass 3 → [13, 20, 9, 24, 46, 52] - compares 13 & 20 (no swap), then 20 & 9 (swap), then 20 & 24 (no swap), then 24 & 46 (no swap) , then 46 & 52 (no swap)
 * pass 4 → [13, 9, 20, 24, 46, 52] - compares 13 & 9 (swap), then 13 & 20 (no swap), then 20 & 24 (no swap), then 24 & 46 (no swap) , then 46 & 52 (no swap)
 * pass 5 → [9, 13, 20, 24, 46, 52] - compares 9 & 13 (no swap), then 13 & 20 (no swap), then 20 & 24 (no swap), then 24 & 46 (no swap) , then 46 & 52 (no swap)
 * ─────────────────────────────────────────────
 */

// ─────────────────────────────────────────────
// For each index i, compare with adjacent element and swap if out of order. Repeat until no swaps are made in a pass.
// Time: O(n²) average and worst cases | Space: O(1)
// Optimization: If no swaps were made in a pass, the array is already sorted and we can break early.
// This can reduce the time complexity to O(n) (Best Case) in the best case when the array is already sorted.
// ─────────────────────────────────────────────

function bubbleSort(arr){
  const n = arr.length;
  let swapped;
  for(let i =0;i<n-1;i++){
    swapped = false;
    for(let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            swapped = true;
        }
    }
    if(!swapped) break;
  }
  return arr;
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
  console.log(`Sorted Array : [${bubbleSort(arr)}]`);
});
