/**
 * Problem: Count Digits in a Number
 * Link: https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/1
 * Difficulty: Easy
 * Topic: Basics / Maths
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (Loop & Count)
// Repeatedly divide by 10 until number becomes 0
// Time: O(d) | Space: O(1)
// ─────────────────────────────────────────────

function countDigitsBrute(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// ─────────────────────────────────────────────
// APPROACH 2 — Better (String Conversion)
// Convert to string and return its length
// Time: O(d) | Space: O(d) — string is created
// ─────────────────────────────────────────────

function countDigitsBetter(n) {
  return Math.abs(n).toString().length;
}

// ─────────────────────────────────────────────
// APPROACH 3 — Optimal (Logarithm)
// log10(n) + 1 gives digit count mathematically
// Time: O(1) | Space: O(1)
// Edge case: n = 0 must be handled separately
// ─────────────────────────────────────────────

function countDigitsOptimal(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

// One important note on the log approach — Math.log10(999999999999999) 
// can return 14.999... instead of 15 due to floating point, so Math.floor would give wrong answer.

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [12345, 7, -999, 0, 1000000];

testCases.forEach(n => {
  console.log(`n = ${n}`);
  console.log(`  Brute:   ${countDigitsBrute(n)}`);
  console.log(`  Better:  ${countDigitsBetter(n)}`);
  console.log(`  Optimal: ${countDigitsOptimal(n)}`);
});