/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};

// Example test case
console.log(maxProfit([7,1,5,3,6,4])); 
// Output: 7 (Buy at 1 sell at 5, buy at 3 sell at 6)
