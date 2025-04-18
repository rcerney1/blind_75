/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 0. Intuition: Iterate over the input and apply two sum II logic at each index
    // 1. Sort the input
    // 2. Keep track of a result var
    // 3. Iterate over the input
    // 4. For each iteration
    //      a. Initialize a left and right pointer, left pointer starts at i+1, right pointer starts at end of input
    //      b. if input[i] > 0 break;
    //      c. if input[i] === input[i-1], continue the for loop to skip duplicates
    //      d. While loop until pointers cross
    //          i. Take the sum of input[i] + input[left] + input[right]
    //          ii. if sum greater than zero decrement the right pointer
    //          iii. if sum is less than zero increment the left pointer
    //          iv. if sum is equal, push it into the result, move both pointers inward
    //              aa. while input[left] === input[left - 1], continue incrementing left pointer to avoid duplicates
    // 5. return result

    // Time O(n^2)
    // Space O(n)
    nums.sort((a, b) => a - b);
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    }
    return result;
};


let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
// Expected: [[-1, -1, 2], [-1, 0, 1]]
