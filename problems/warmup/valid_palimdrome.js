// A phrase is a palindrome if, after converting all uppercase letters 
// into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

class Solution{
    isPalindrome(string) {
        //convert string to lower case and remove all non alphanumeric chars
        const filtered = string.toLowerCase().replace(/[^a-z0-9]/g, '');

        return filtered === filtered.split('').reverse().join('');
    }
}

const sol = new Solution();

console.log(sol.isPalindrome("racecar@@@@")) // should return true
console.log(sol.isPalindrome("not a palindrome")) // should return false