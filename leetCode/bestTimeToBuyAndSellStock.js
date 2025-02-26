const buySellBest = (prices) => {
    let currMin = prices[0];
    let currMax = 0;

    for(let i = 0; i < prices.length; i++){
        currMin = Math.min( currMin, prices[i]);
        currMax = Math.max(currMax, prices[i] - currMin)

    }

    return currMax;

}

console.log(buySellBest([7,1,5,3,6,4]));
//return max profit
//dynamic programing
//find smallest value then next largest value