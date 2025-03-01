const productExceptSelf = (nums) => {
    let forwardArray = [];
    let start = 1;

    for(let i = 0; i < nums.length; i++){
        forwardArray.push(start);
        start = start * nums[i];
    }

    let res = [];
    let start2 = 1;

    for(let i = nums.length - 1; i >= 0; i--){
        res.unshift(start2 * forwardArray[i]);
        start2 = start2 * nums[i];
    }

    return res;
}

console.log(productExceptSelf([1,2,3,4]))