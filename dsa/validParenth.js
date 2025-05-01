/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
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
