// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. 
// It is also case-insensitive and ignores all non-alphanumeric characters.
class Solution {
    valid_palindrome(s) {
        // Step 1: Normalize the string
        // Convert to lowercase and remove non-alphanumeric characters
        const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        // Step 2: Check if the string is a palindrome
        let left = 0;
        let right = normalizedString.length - 1;

        while (left < right) {
            if (normalizedString[left] !== normalizedString[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true; // The string is a palindrome
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.valid_palindrome("A man, a plan, a canal: Panama")); // true
console.log(solution.valid_palindrome("race a car")); // false