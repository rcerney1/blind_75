// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// 
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// 
// Return the maximum profit you can achieve. You may choose to not make any transactions, 
// in which case the profit would be 0.

class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price; // Update the minimum price
            } else {
                maxProfit = Math.max(maxProfit, price - minPrice); // Calculate max profit
            }
        }
        
        return maxProfit;
    }
}

const sol = new Solution();
console.log(sol.maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(sol.maxProfit([7, 6, 4, 3, 1])); // Output: 0
