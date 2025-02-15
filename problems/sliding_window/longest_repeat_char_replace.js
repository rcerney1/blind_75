// Longest Substring with Same Letters after Replacement
// You are given a string s consisting of only uppercase English characters and an integer k.
// You can choose up to k characters of the string and replace them with any other uppercase English character.
// 
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

class Solution {
    characterReplacement(s, k) {
        let charCount = new Map();
        let left = 0, maxFreq = 0, maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, charCount.get(s[right]));

            while ((right - left + 1) - maxFreq > k) {
                charCount.set(s[left], charCount.get(s[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}

const sol = new Solution();
console.log(sol.characterReplacement("AABABBA", 1)); // Output: 4
console.log(sol.characterReplacement("ABAB", 2));    // Output: 4
console.log(sol.characterReplacement("AAAA", 2));    // Output: 4
console.log(sol.characterReplacement("BAAA", 1));    // Output: 4
