/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 0. Intuition: Use expand around center technique
    // 1. A palindrome mirrors around its center
    // 2. There are 2n - 1 possible centers (odd/even length)
    // 3. Expand around each center and track the longest found

    // Time O(n^2)
    // Space O(1)

    if (s.length < 1) return "";

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    };

    for (let i = 0; i < s.length; i++) {
        let [left1, right1] = expandAroundCenter(i, i);       // odd-length
        let [left2, right2] = expandAroundCenter(i, i + 1);   // even-length

        if (right1 - left1 > end - start) {
            start = left1;
            end = right1;
        }

        if (right2 - left2 > end - start) {
            start = left2;
            end = right2;
        }
    }

    return s.slice(start, end + 1);
};

// Example test cases
console.log(longestPalindrome("babad"));    // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));     // Output: "bb"
console.log(longestPalindrome("a"));        // Output: "a"
console.log(longestPalindrome("ac"));       // Output: "a" or "c"
