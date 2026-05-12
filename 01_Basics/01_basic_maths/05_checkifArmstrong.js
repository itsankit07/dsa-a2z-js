/**
 * Problem: Check if a Number is an Armstrong Number
 * Link: https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1 , https://leetcode.com/problems/armstrong-number/description/
 * Difficulty: Easy
 * Topic: Basics / Maths
 *
 * An Armstrong number is a number where the sum of its digits
 * each raised to the power of total number of digits equals the number itself
 * Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✅
 * Example: 9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474 ✅
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Optimal (Math / Loop)
// Extract digits using % 10, count digits using log10
// No string conversion, pure math
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function isArmstrongOptimal(n) {
  if (n < 0) return false;
  const power = n === 0 ? 1 : Math.floor(Math.log10(n)) + 1;
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    const lastDigit = temp % 10;
    sum += Math.pow(lastDigit, power);
    temp = Math.floor(temp / 10);
  }
  return sum === n;
}

const testCases = [
  153,   // true  → 1³ + 5³ + 3³ = 153
  9474,  // true  → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474
  370,   // true  → 3³ + 7³ + 0³ = 370
  371,   // true  → 3³ + 7³ + 1³ = 371
  123,   // false
  0,     // true  → 0¹ = 0
];

testCases.forEach(n => {
  console.log(`n = ${n}`);
  console.log(`  Optimal: ${isArmstrongOptimal(n)}`);
});