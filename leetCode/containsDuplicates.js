const containsDuplicates = (nums) => {
    let set = new Set(nums);
    
    return set.size !== nums.length

    
}

console.log(containsDuplicates([1,2,3,1]));