// Minimum Window Substring
// Given two strings s and t, return the shortest substring of s 
// such that every character in t, including duplicates, is present in the substring. 
// If such a substring does not exist, return an empty string "".
//
// You may assume that the correct output is always unique.

class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return "";

        let charCount = new Map();
        for (let char of t) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }

        let left = 0, minLen = Infinity, minStart = 0, required = charCount.size;
        let windowCounts = new Map();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

            if (charCount.has(char) && windowCounts.get(char) === charCount.get(char)) {
                required--;
            }

            while (required === 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }

                let leftChar = s[left];
                windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

                if (charCount.has(leftChar) && windowCounts.get(leftChar) < charCount.get(leftChar)) {
                    required++;
                }

                left++;
            }
        }

        return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
    }
}

const sol = new Solution();
console.log(sol.minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(sol.minWindow("a", "a"));              // Output: "a"
console.log(sol.minWindow("a", "aa"));             // Output: ""
console.log(sol.minWindow("abc", "cba"));          // Output: "abc"
