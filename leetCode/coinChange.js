const coinChange = (coins, amount) => {
    let dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let currAmount = 1; currAmount <= amount; currAmount++){
        for (let coin of coins){
            if(currAmount - coin >= 0){
                dp[currAmount] = Math.min(dp[currAmount], 1 + dp[currAmount - coin])
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

console.log(coinChange([1,2,5], 11))