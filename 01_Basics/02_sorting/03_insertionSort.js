/**
 * Problem: Insertion Sort
 * Link: https://www.geeksforgeeks.org/problems/inserion-sort/1
 * Difficulty: Easy
 * Topic: Sorting
 *
 * Idea: In Insertion sort , we divide the array into sorted and unsorted parts. Initially, the sorted part contains only the first element.
 * We then take each element from the unsorted part and insert it into the correct position in the sorted part by shifting elements to the right.
 *
 * Example:
 * [13, 46, 24, 52, 20, 9]  - first pass takes 46 and compares with 13 (no shift, insert 46 after 13)   
 * pass 1 → [13, 46, 24, 52, 20, 9] - takes 24 and compares with 46 (shift 46 right), then compares with 13 (no shift, insert 24 after 13)
 * pass 2 → [13, 24, 46, 52, 20, 9] - takes 52 and compares with 46 (no shift, insert 52 after 46)
 * pass 3 → [13, 24, 46, 52, 20, 9] - takes 20 and compares with 52 (shift 52 right), then compares with 46 (shift 46 right), then compares with 24 (shift 24 right), then compares with 13 (no shift, insert 20 after 13)
 * pass 4 → [13, 20, 24, 46, 52, 9] - takes 9 and compares with 52 (shift right), then compares with 46 (shift right), then compares with 24 (shift right), then compares with 20 (shift right), then compares with 13 (shift right), insert 9 at index0
 * pass 5 → [9, 13, 20, 24, 46, 52] - all elements are in correct position, no shifts needed
 * ─────────────────────────────────────────────
 */

// ─────────────────────────────────────────────
// For each index i, take element and compare with sorted portion [0...i-1] and shift elements right until correct position is found.
// Time: O(n²) average and worst cases | Space: O(1)
// Optimization: If the current element is greater than the last element of the sorted portion, we can skip the inner loop and directly insert it at the end of the sorted portion.
// This can reduce the time complexity to O(n) (Best Case) in the best case when the array is already sorted.
// ─────────────────────────────────────────────

function insertionSort(arr){
  const n = arr.length;
  for(let i=1;i<n;i++){
    const key = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
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
  console.log(`Sorted Array : [${insertionSort(arr)}]`);
});
