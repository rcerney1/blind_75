// Given an integer array nums, return an array output where output[i] 
// is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

class Solution {
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n).fill(1);

        // Pass 1: Compute the prefix product for each element
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        // Pass 2: Compute the suffix product and multiply with prefix product
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output;
    }
}

// Example usage:
const solution = new Solution();
const nums = [1, 2, 3, 4];
console.log(solution.productExceptSelf(nums)); // Output: [24, 12, 8, 6]
