/**
 * Problem: Reverse a Number
 * Link: https://www.geeksforgeeks.org/problems/reverse-digits0316/1 , https://leetcode.com/problems/reverse-integer/description/
 * Difficulty: Easy
 * Topic: Basics / Maths
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (String Reversal)
// Convert to string, reverse, convert back
// Time: O(n) | Space: O(n) — string is created
// ─────────────────────────────────────────────
function reverseNumberBrute(n) {
  const sign = n < 0 ? -1 : 1;
  const reversed = Math.abs(n).toString().split("").reverse().join("");
  return sign * parseInt(reversed, 10);
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Math / Loop)
// Extract last digit using % 10, build reversed number
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────
function reverseNumberOptimal(n) {
  const sign = n < 0 ? -1 : 1;
  n = Math.abs(n);
  let reversed = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return sign * reversed;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [12345, 7, -999, 1000, 1200];

testCases.forEach(n => {
  console.log(`n = ${n}`);
  console.log(`  Brute:   ${reverseNumberBrute(n)}`);
  console.log(`  Optimal: ${reverseNumberOptimal(n)}`);
});