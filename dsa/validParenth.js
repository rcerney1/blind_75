/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 0. Intuition: Use a stack to track open brackets
    // 1. Create a map of closing brackets to opening brackets
    // 2. Initialize an empty stack
    // 3. Loop through each character in the string
    //      a. If it's an opening bracket, push to stack
    //      b. If it's a closing bracket:
    //          i. Pop from stack and check if it matches the map
    //          ii. If it doesn't match, return false
    // 4. After the loop, if stack is empty, return true (all matched), else false

    // Time O(n)
    // Space O(n)

    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack = [];

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== map[char]) return false;
        }
    }

    return stack.length === 0;
};

// Example test cases
console.log(isValid("()"));        
console.log(isValid("()[]{}"));    
console.log(isValid("(]"));        
console.log(isValid("([)]"));      
console.log(isValid("{[]}"));      /
