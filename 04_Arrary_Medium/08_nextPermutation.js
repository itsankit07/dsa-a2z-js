/**
 * Problem: next_permutation : find next lexicographically greater permutation
 * Link : https://leetcode.com/problems/next-permutation/ , https://www.geeksforgeeks.org/next-permutation/
 * Difficulty: Medium
 * Topic: Array / Medium
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force
// Generate all possible permutations of the array and find the next permutation in lexicographical order.
// Time: O(n!) | Space: O(n!)
// ─────────────────────────────────────────────

function getPermutations(arr) {
  if (arr.length === 0) return [[]];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    let perms = getPermutations(rest);
    for (let perm of perms) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

function nextPermutationBrute(nums) {
  // Step 1: Generate all permutations
  let perms = getPermutations(nums);

  // Step 2: Remove duplicates using a Set
  let uniquePerms = Array.from(new Set(perms.map((p) => p.join(",")))).map(
    (s) => s.split(",").map(Number),
  );

  // Step 3: Sort lexicographically
  uniquePerms.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  // Step 4: Find current index
  let idx = uniquePerms.findIndex((p) => p.join(",") === nums.join(","));

  // Step 5: Return next permutation (wrap if last)
  if (idx === uniquePerms.length - 1) {
    return uniquePerms[0];
  } else {
    return uniquePerms[idx + 1];
  }
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Using the algorithm to find the next permutation in-place)
// 1. Find the largest index k such that arr[k] < arr[k + 1]. If no such index exists, the permutation is the last permutation.
// 2. Find the largest index l greater than k such that arr[k] < arr[l].
// 3. Swap the value of arr[k] with that of arr[l].
// 4. Reverse the sequence from arr[k + 1] up to and including the final element arr[arr.length - 1].
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function nextPermutationOptimal(arr) {
  let k = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      k = i;
      break;
    }
  }
  if (k === -1) {
    return arr.reverse();
  }
  let l = -1;
  for (let i = arr.length - 1; i > k; i--) {
    if (arr[k] < arr[i]) {
      l = i;
      break;
    }
  }
  [arr[k], arr[l]] = [arr[l], arr[k]];
  let left = k + 1;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────

const testCases = [
  [1, 2, 3], // Output: [1, 3, 2]
  [3, 2, 1], // Output: [1, 2, 3]
  [1, 1, 5], // Output: [1, 5, 1]
];

testCases.forEach((arr) => {
  console.log(`Original: [${arr.join(", ")}]`);
  console.log(`  Brute:   [${nextPermutationBrute([...arr])}]`);
  console.log(`  Optimal: [${nextPermutationOptimal([...arr])}]`);
});
