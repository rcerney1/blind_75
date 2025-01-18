// Design an algorithm to encode a list of strings to a single string. 
// The encoded string is then decoded back to the original list of strings.

class Solution {
    // Encode a list of strings to a single string
    encode(strings) {
        let encoded = '';
        for (const str of strings) {
            encoded += str.length + ':' + str;
        }
        return encoded;
    }

    // Decode a single string to a list of strings
    decode(encodedString) {
        const decoded = [];
        let i = 0;
        while (i < encodedString.length) {
            // Find the delimiter to determine the length of the next string
            const delimiterIndex = encodedString.indexOf(':', i);
            const length = parseInt(encodedString.substring(i, delimiterIndex), 10);
            // Extract the string using the length
            const str = encodedString.substring(delimiterIndex + 1, delimiterIndex + 1 + length);
            decoded.push(str);
            // Move the pointer forward
            i = delimiterIndex + 1 + length;
        }
        return decoded;
    }
}

// Usage
const codec = new Solution();

const originalStrings = ["hello", "world", "this", "is", "test"];
const encoded = codec.encode(originalStrings);
console.log("Encoded:", encoded);

const decoded = codec.decode(encoded);
console.log("Decoded:", decoded);
