// Search in Rotated Sorted Array
// Given the rotated sorted array nums and an integer target, 
// return the index of target within nums, or -1 if it is not present.

class Solution {
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            // Check if we found the target
            if (nums[mid] === target) {
                return mid;
            }

            // If the left half is sorted
            if (nums[left] <= nums[mid]) {
                // If target is in the left half
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // If the right half is sorted
            else {
                // If target is in the right half
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1; // If target is not found
    }
}

const sol = new Solution();
console.log(sol.search([4,5,6,7,0,1,2], 0));  // Output: 4
console.log(sol.search([4,5,6,7,0,1,2], 3));  // Output: -1
console.log(sol.search([1], 0));              // Output: -1
console.log(sol.search([1, 3], 3));           // Output: 1
