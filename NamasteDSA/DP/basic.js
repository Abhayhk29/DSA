// Top Down approach with Memoization
/**
 * @param {number} n
 * @return {number}
 */

 let store = {};
var fib = function(n) {
    if(n <= 1){
        return n;
    }

    if(!store[n]){
        store[n] =  fib(n - 1) + fib(n - 2)
    }

    return store[n];
};

// Bottom Up approach with Tabulation
var fibB = function(n) {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;  
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// climbing stairs Bottom Up approach with Tabulation

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [0,1,2];
    for(let i = 3; i <= n;i++){
        dp[i] = dp[i - 1] + dp[i - 2];        
    }

    return dp[n];
};

function climbStoreTopDown(){
    // climbing stairs Top Down approach with Memoization
    let store1 = {};
    var climbStairsM = function(n) {
        if(n <= 2){
            return n;
        }   
        if(!store1[n]){
            store1[n] = climbStairsM(n - 1) + climbStairsM(n - 2);      
        }
    
        return store1[n];
    }
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // spacs = O(n)
    // Time = O(n)
  
    // let n = nums.length;
    // if(n === 1) return nums[0];

    // let dp = [nums[0], Math.max(nums[0], nums[1])];

    // for(let i = 2; i < n; i++){
    //     dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    // }

    // return dp[n - 1]

    // Space Optimized
    // Spacs = O(1)
    // Time = O(n)
    let n = nums.length;

    if(n === 1) return nums[0];

    let first = nums[0];
    let second = Math.max(first, nums[1]);

    for(let i = 2; i < n; i++){
        let current = Math.max(nums[i] + first, second);
        first = second;
        second = current;
    }

    return second;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // House Robber II
    // Spacs = O(1)
        // Time = O(n)
    let n = nums.length;

    if(n === 1) return nums[0];

    if( n === 2) return Math.max(nums[0], nums[1])

    function helper(start, end){
        let first = nums[start];
        let second = Math.max(first, nums[start + 1]);

        for(let i = start + 2; i <= end; i++){
            let current = Math.max(nums[i] + first, second);
            first = second;
            second = current;
        }

        return second;
    }

    return Math.max(helper(0,n-2), helper(1,n - 1));

};


// coin problem simple rescursion Solution

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;

    let fn = (remAmount) => {
        if(remAmount === 0) return 0;
        if(remAmount < 0) return -1;

        let minCoins = Infinity;

        for(let i = 0; i < n; i++){
            let res = fn(remAmount - coins[i]);
            if(res != -1){
                minCoins = Math.min(minCoins, 1 + res);
            }
        }

        return minCoins === Infinity ? -1 : minCoins;
    }

    return fn(amount);
};

// coin problem with Memoization

/** 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 **/
var coinChange = function(coins, amount) {
    let n = coins.length;
    let store = {};
    let fn = (remAmount) => {
        if(remAmount === 0) return 0;
        if(remAmount < 0) return -1;    

        if(store[remAmount] !== undefined) return store[remAmount];
        let minCoins = Infinity;
        for(let i = 0; i < n; i++){ 
            let res = fn(remAmount - coins[i]);
            if(res != -1){
                minCoins = Math.min(minCoins, 1 + res);
            }
        }

        store[remAmount] = minCoins === Infinity ? -1 : minCoins;
        return store[remAmount];
    }
    return fn(amount);
}


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = {};

    let fn = (remAmount) => {
        if(remAmount === 0) return 0;
        if(remAmount < 0) return -1;

        if(remAmount in dp){
            return dp[remAmount];
        }

        let minCoins = Infinity;

        for(let i = 0; i < n; i++){
            let res = fn(remAmount - coins[i]);
            if(res != -1){
                minCoins = Math.min(minCoins, 1 + res);
            }
        }
        dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
        return dp[remAmount];
    }

    return fn(amount);
};

// coin problem with Tabulation
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 **/
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < n; j++){
            if(i - coins[j] >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

