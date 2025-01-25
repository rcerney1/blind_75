// Given an array of integers nums, return the length of the longest 
// consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which 
// each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

class Solution {
    longestConsecutive(nums) {
        // Edge case: if the array is empty, return 0
        if (nums.length === 0) return 0;

        // Create a set of numbers for O(1) lookups
        const numSet = new Set(nums);
        let longestStreak = 0;

        // Iterate through the numbers
        for (const num of nums) {
            // Only start counting if `num` is the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Check the rest of the sequence
                while (numSet.has(currentNum + 1)) {
                    currentNum ++;
                    currentStreak ++;
                }

                // Update the longest streak
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}
