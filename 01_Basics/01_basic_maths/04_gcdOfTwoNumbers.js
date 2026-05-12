/**
 * Problem: Greatest Common Divisor (GCD)
 * Link: https://www.geeksforgeeks.org/problems/gcd-of-two-numbers2513/1 , https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/
 * Difficulty: Easy
 * Topic: Basics / Maths
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force
// Check all numbers from 1 to min(n1, n2)
// track the largest that divides both
// Time: O(min(n1, n2)) | Space: O(1)
// ─────────────────────────────────────────────
function gcdBrute(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better
// Loop from min(n1, n2) down to 1
// return the first number that divides both
// saves iterations by going in reverse
// Time: O(min(n1, n2)) | Space: O(1)
// ─────────────────────────────────────────────
function gcdBetter(n1, n2) {
  for (let i = Math.min(n1, n2); i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) return i;
  }
  return 1;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Euclidean Algorithm)
// GCD(n1, n2) = GCD(n2, n1 % n2)
// Recursively reduce until remainder is 0
// Time: O(log(min(n1, n2))) | Space: O(1)
// ─────────────────────────────────────────────
function gcdOptimal(n1, n2) {
  while (n2 !== 0) {
    const remainder = n2;
    n2 = n1 % n2;
    n1 = remainder;
  }
  return n1;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  [12, 8],    // 4
  [9, 3],     // 3
  [100, 75],  // 25
  [7, 5],     // 1 (coprime)
  [0, 5],     // 5
];

testCases.forEach(([n1, n2]) => {
  console.log(`n1 = ${n1}, n2 = ${n2}`);
  console.log(`  Brute:   ${gcdBrute(n1, n2)}`);
  console.log(`  Better:  ${gcdBetter(n1, n2)}`);
  console.log(`  Optimal: ${gcdOptimal(n1, n2)}`);
});