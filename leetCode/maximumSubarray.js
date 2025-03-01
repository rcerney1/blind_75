const findMaxSubArray = (nums) => {
    let currMax = nums[0];
    let max = nums[0];

    for(let i = 0; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        max = Math.max(max, currMax);
    }



    return max;
}

console.log(findMaxSubArray([-2, 1, -3,4, -1, 2, 1, -5, 4]))