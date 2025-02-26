const twoSum = (nums, target) => {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        const compliment = target - nums[i]
        
        if(map.has(compliment)){    
            return [i, map.get(compliment)]
        } else {
            map.set(nums[i], i)
            
        }
    }
}

console.log(twoSum([2,7,11,15], 9))