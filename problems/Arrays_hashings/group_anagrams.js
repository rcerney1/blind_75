// Given an array of strings strs, group all anagrams together into sublists. 
// You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

class Solution {
    groupAnagrams(strs) {
        // Create a map to group anagrams
        const anagrams = new Map();

        // Iterate through each string in the input array
        for (const str of strs) {
            // Sort the characters of the string to create a key
            const sortedKey = str.split('').sort().join('');

            // If the key doesn't exist, initialize an empty array
            if (!anagrams.has(sortedKey)) {
            anagrams.set(sortedKey, []);
        }

        // Push the current string into the group
        anagrams.get(sortedKey).push(str);
    }

    // Return the grouped anagrams as an array of arrays
    return Array.from(anagrams.values());
    }
}