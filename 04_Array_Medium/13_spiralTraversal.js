/**
 * Problem: Given a Matrix, print the given matrix in spiral order.
 * Link : https://leetcode.com/problems/spiral-matrix/ , https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// We can use four pointers to keep track of the boundaries of the matrix (top, bottom, left, right) and
// iterate through the matrix in a spiral manner until we have traversed all elements.
// Time: O(m*n) | Space: O(1)
// ─────────────────────────────────────────────


function spiralTraversal(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left along the bottom row (if applicable)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top along the left column (if applicable)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ]
];

testCases.forEach((matrix) => {
  console.log(`Original Matrix:`);
  matrix.forEach(row => console.log(row));
  console.log(`Spiral Traversal: [${spiralTraversal(matrix).join(", ")}]`);
});
