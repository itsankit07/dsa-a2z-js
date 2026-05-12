/**
 * Problem: Check if a number is palindrome
 * Link: https://www.geeksforgeeks.org/problems/palindrome0746/1 , https://leetcode.com/problems/palindrome-number/description/
 * Difficulty: Easy
 * Topic: Basics / Maths
 */

// ─────────────────────────────────────────────
// APPROACH 1 — Brute Force (String Reversal)
// Convert to string and compare with its reverse
// Time: O(n) | Space: O(n) — string is created
// ─────────────────────────────────────────────

function isPalindromeBrute(n) {
  if (n < 0) return false;
  const str = n.toString();

  return str === str.split('').reverse().join('');
}

// ─────────────────────────────────────────────
// APPROACH 2 — Optimal (Math / Loop)
// Reverse the number using math and compare with original
// Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────

function isPalindromeOptimal(n) {
  if (n < 0) return false;
  let original= n;
  let reversed = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return original === reversed;
}

// ─────────────────────────────────────────────
// TEST CASES
// ─────────────────────────────────────────────
const testCases = [121, 1221, -121, 10, 0, 12321, 123];

testCases.forEach(n => {
  console.log(`n = ${n}`);
  console.log(`  Brute:   ${isPalindromeBrute(n)}`);
  console.log(`  Optimal: ${isPalindromeOptimal(n)}`);
});
