// Given an array of numbers sorted in ascending order and a target sum
// find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) 
// such that they add up to the given target. If no such pair exists return [-1, -1] 

class Solution {
    twoSum(nums, target) {
        const history = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];

            let compliment = target - curr;

            let complimentIdx = history[compliment];
            
            if (complimentIdx !== undefined) return [complimentIdx, i];
            
            history[curr] = i;
        }
        return []
    }
}

const sol = new Solution();

console.log(sol)
console.log(sol.twoSum([3,4,5,6], 7))
