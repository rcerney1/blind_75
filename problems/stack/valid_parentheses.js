// Valid Parentheses
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'. 
//
// The input string s is valid if and only if:
// - Every open bracket is closed by the same type of close bracket.
// - Open brackets are closed in the correct order.
// - Every close bracket has a corresponding open bracket of the same type.
//
// Return true if s is a valid string, and false otherwise.

class Solution {
    isValid(s) {
        let stack = [];
        let map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        for (let char of s) {
            // If it's an opening bracket, push it to the stack
            if (map[char]) {
                stack.push(char);
            } 
            // If it's a closing bracket, check if it matches the last opened one
            else {
                if (stack.length === 0 || map[stack.pop()] !== char) {
                    return false;
                }
            }
        }

        // The stack should be empty if all brackets are matched
        return stack.length === 0;
    }
}

const sol = new Solution();
console.log(sol.isValid("()"));          // Output: true
console.log(sol.isValid("()[]{}"));      // Output: true
console.log(sol.isValid("(]"));          // Output: false
console.log(sol.isValid("([)]"));        // Output: false
console.log(sol.isValid("{[]}"));        // Output: true
