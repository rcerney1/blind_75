class Solution {
    containsDuplicate(nums) {
      // TODO: Write your code here
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
            return true;
          }
        }
      }
      return false;
    }
  }
  
  // Test the method
  const solution = new Solution();
  const nums = [1, 2, 3, 1]; // Example input
  console.log(solution.containsDuplicate(nums)); // Should print true
  