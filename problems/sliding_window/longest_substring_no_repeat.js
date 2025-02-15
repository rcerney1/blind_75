// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
//
// A substring is a contiguous sequence of characters within a string.

class Solution {
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let left = 0, maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}

const sol = new Solution();
console.log(sol.lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(sol.lengthOfLongestSubstring("bbbbb"));   // Output: 1
console.log(sol.lengthOfLongestSubstring("pwwkew"));  // Output: 3
console.log(sol.lengthOfLongestSubstring(""));        // Output: 0
