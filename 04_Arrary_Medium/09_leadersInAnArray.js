/**
 * Problem: Leaders in an Array
 * Given an array of integers, find all the leaders in the array.
 * An element is a leader if it is greater than all the elements to its right.
 * Link : https://www.geeksforgeeks.org/leaders-in-an-array/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Nested Loops )
// Pick one element and check if it is greater than all the elements to its right.
// Time: O(n^2) | Space: O(1)
// ─────────────────────────────────────────────

function leadersBrute(arr) {
  const leaders = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Reverse Traversal keeping a max)
// Traverse the array from right to left, keeping track of the maximum element seen so far.
// If the current element is greater than the maximum, it is a leader.
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function leadersOptimal(arr) {
  const leaders = [];
  const n = arr.length;
  let max = arr[n - 1];
  leaders.push(max);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      leaders.push(max);
    }
  }

  return leaders.reverse(); // Reverse to maintain the original order of leaders
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [16, 17, 4, 3, 5, 2],
  [1, 2, 3, 4, 0],
  [7, 10, 4, 10, 6, 5, 2],
  [10, 9, 8, 7, 6],
  [5, 4, 3, 2, 1],
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${leadersBrute([...arr])}]`);
  console.log(`  Optimal: [${leadersOptimal([...arr])}]`);
});
