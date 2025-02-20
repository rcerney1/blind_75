// Find Minimum in Rotated Sorted Array
// You are given an array of length n which was originally sorted in ascending order. 
// It has now been rotated between 1 and n times. 
// Assuming all elements in the rotated sorted array nums are unique, 
// return the minimum element of this array.

class Solution {
    findMin(nums) {
        let left = 0, right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            // If the middle element is greater than the right element,
            // it means the minimum is on the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, the minimum is on the left half (including mid)
                right = mid;
            }
        }

        return nums[left]; // The left pointer will point to the minimum element
    }
}

const sol = new Solution();
console.log(sol.findMin([3,4,5,6,7,0,1,2])); // Output: 0
console.log(sol.findMin([4,5,6,7,0,1,2]));   // Output: 0
console.log(sol.findMin([11,13,15,17]));      // Output: 11
console.log(sol.findMin([3,4,5,1,2]));        // Output: 1
