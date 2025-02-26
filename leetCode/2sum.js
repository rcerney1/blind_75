const twoSum = (nums, target) => {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        const compliment = target - nums[i]
        
        if(map.has(compliment)){    
            return [i, map.get(compliment)]
        } else {
            map.set(nums[i], i)
            console.log(map) 
        }
    }

    return false;
}

console.log(twoSum([2,6,11,15], 9))


//create a new map
//create a loop through the numbers array
//each loop make a compliment variable
    //the compliment will be the target - numbers[i]
//if the map has the compliment variable
    //return [i, map.get(compliment)]
    //else, set map to [nums[i], i]
//end loop
//return false since we went through the loop with no returns