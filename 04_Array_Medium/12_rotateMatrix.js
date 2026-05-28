/**
 * Problem: Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.
 * Link: https://leetcode.com/problems/rotate-image/ , https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Extra Matrix)
// Create a new matrix and fill it with the rotated values.
// Traverse the original matrix and for each element at position (i, j), place it in the new matrix at position (j, n - 1 - i).
// Time: O(n^2) | Space: O(n^2)
// ─────────────────────────────────────────────

function rotateMatrixBrute(matrix) {
  const n = matrix.length;
  const rotated = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (In-Place Rotation using Transpose and Reverse)
// First transpose the matrix, then reverse each row.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function rotateMatrixOptimal(matrix) {
  const n = matrix.length;
  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]],
    [[1]],
    [[1, 2], [3, 4]],
];

testCases.forEach((matrix, index) => {
    console.log(`Test Case ${index + 1}:`);
    const rotatedBrute = rotateMatrixBrute([...matrix.map(row => [...row])]);
    console.log("Brute:");
    rotatedBrute.forEach(row => console.log(row));
    rotateMatrixOptimal(matrix); 
    console.log("Optimal:");
    matrix.forEach(row => console.log(row));
});
