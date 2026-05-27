/**
 * Problem: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
 * Link : https://leetcode.com/problems/set-matrix-zeroes/ , https://www.geeksforgeeks.org/a-boolean-matrix-question/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops)
// For every element in the matrix, if it is 0, set its entire row and column to -1 (or any other marker value that is not 0).
// After processing the entire matrix, replace all -1 with 0.
// This approach is for non-negative integers. If the matrix can contain negative integers, we can use a different marker value (e.g., a string "MARKER").
// Time: O(m*n*(m+n)) | Space: O(1)
// ─────────────────────────────────────────────

function setMatrixZeroesBrute(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // Mark the entire row
        for (let k = 0; k < n; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = -1; // Mark with -1
          }
        }
        // Mark the entire column
        for (let k = 0; k < m; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = -1; // Mark with -1
          }
        }
      }
    }
  }
  // Replace all -1 with 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (Using Additional Space)
// Use two arrays to keep track of which rows and columns need to be set to 0.
// Time: O(m*n) | Space: O(m+n)
// ─────────────────────────────────────────────
function setMatrixZeroesBetter(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowsToZero = new Array(m).fill(false);
  const colsToZero = new Array(n).fill(false);

  // Identify rows and columns that need to be zeroed
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero[i] = true;
        colsToZero[j] = true;
      }
    }
  }

  // Zero out the identified rows and columns
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowsToZero[i] || colsToZero[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Using First Row and Column as Markers)
// Use the first row and first column of the matrix to store the information about which rows and columns need to be zeroed.
// Time: O(m*n) | Space: O(1)
// ─────────────────────────────────────────────

function setMatrixZeroesOptimal(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;
  // Check if the first row has any zeros
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
  // Check if the first column has any zeros
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  // Use the first row and column to mark zeros
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark the first cell of the row
        matrix[0][j] = 0; // Mark the first cell of the column
      }
    }
  }
  // Zero out cells based on marks in the first row and column
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  } // Zero out the first row if needed
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  // Zero out the first column if needed
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ]
];

testCases.forEach((matrix, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log("Original:");
    setMatrixZeroesOptimal([...matrix.map(row => [...row])]); 
    matrix.forEach(row => console.log(row));
    setMatrixZeroesBetter([...matrix.map(row => [...row])]);
    console.log("Better:");
    matrix.forEach(row => console.log(row));
    setMatrixZeroesBrute([...matrix.map(row => [...row])]);
    console.log("Brute:");
    matrix.forEach(row => console.log(row));
});
