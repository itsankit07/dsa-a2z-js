/**
 * Problem: Check if a Number is Prime
 * Link: https://www.geeksforgeeks.org/problems/prime-number2314/1 , https://leetcode.com/problems/count-primes/description/
 * Difficulty: Easy
 * Topic: Basics / Maths
 *
 * A prime number is a number greater than 1 that has
 * no divisors other than 1 and itself.
 * Example: 7 is prime → divisors: 1, 7 only ✅
 * Example: 12 is not prime → divisors: 1, 2, 3, 4, 6, 12 ❌
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force
// Check all numbers from 2 to n-1
// if any divides n evenly, it's not prime
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────
function isPrimeBrute(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better
// Only check up to n/2
// no divisor of n can be greater than n/2 (except n itself)
// Time: O(n/2) → O(n) | Space: O(1)
// ─────────────────────────────────────────────
function isPrimeBetter(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal
// Only check up to √n
// if n has a divisor > √n, its pair is always < √n
// so we would have already found it
// Time: O(√n) | Space: O(1)
// ─────────────────────────────────────────────
function isPrimeOptimal(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;        // eliminate all even numbers early
  for (let i = 3; i <= Math.sqrt(n); i += 2) {  // only check odd numbers
    if (n % i === 0) return false;
  }
  return true;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [
  2,    // true  — smallest prime
  7,    // true
  12,   // false
  97,   // true
  1,    // false — 1 is not prime by definition
  0,    // false
  -7,   // false — negatives are not prime
];

testCases.forEach(n => {
  console.log(`n = ${n}`);
  console.log(`  Brute:   ${isPrimeBrute(n)}`);
  console.log(`  Better:  ${isPrimeBetter(n)}`);
  console.log(`  Optimal: ${isPrimeOptimal(n)}`);
});