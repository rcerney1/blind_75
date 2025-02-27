const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;

    while(left < right) {
        let width = right - left;
        let maxArea = (Math.min(heights[left], heights[right])) * width;
        max = Math.max(max, maxArea);
        if(heights[left] <= heights[right]){
            left++;
        } else {
            right--;
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))