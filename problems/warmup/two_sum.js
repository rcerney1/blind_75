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

console.log(sol.twoSum([3,4,5,6], 7))
