// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, 
// and the indices i, j, and k are all distinct.

// The output should not contain any duplicate triplets. 
// You may return the output and the triplets in any order.

class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b); // Sort the array
        let result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

            let left = i + 1, right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicate values for left and right pointers
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
}

const sol = new Solution();
console.log(sol.threeSum([-1, 0, 1, 2, -1, -4]));
