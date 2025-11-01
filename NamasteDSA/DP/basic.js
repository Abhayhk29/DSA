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

// 647. Palindromic Substrings using Recursion
/**
 * @param {string} s
 * @return {number}
 **/
var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let isPalindrome = (left, right) => {
        if(left > right) return true;
        if(s[left] !== s[right]) return false;
        return isPalindrome(left + 1, right - 1);
    }

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(isPalindrome(i, j)){
                count++;
            }
        }
    }   
    return count;
}   


// 647. Palindromic Substrings using DP - Memoization
/**
 * @param {string} s    
 * 
 * 
 * @return {number}
 * */
var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let dp = {};

    let isPalindrome = (left, right) => {
        if(left > right) return true;
        if(s[left] !== s[right]) return false;  
        let key = left + ',' + right;
        if(!(key in dp)){
            dp[key] = isPalindrome(left + 1, right - 1);
        }
        return dp[key];
    }
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(isPalindrome(i, j)){
                count++;
            }
        }
    }   
    return count;
}

// using DP - Tabulation
/**
 * @param {string} s
 *  
 * * @return {number}
 **/
var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let dp = Array.from({length: n}, () => Array(n).fill(false));
    for(let length = 1; length <= n; length++){
        for(let start = 0; start <= n - length; start++){
            let end = start + length - 1;   
            if(s[start] === s[end]){
                if(length <= 2){
                    dp[start][end] = true;
                } else {
                    dp[start][end] = dp[start + 1][end - 1];
                }
            } else {
                dp[start][end] = false;
            }
            if(dp[start][end]){
                count++;
            }
        }
    }
    return count;
} 


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let fn = (sr) => {
        if(sr === '') return 1;
        if(sr === '0') return 0;

        let n = sr.length;
        let oneDigit = sr.substring(n - 1)
        let twoDigit = sr.substring(n - 2)

        let ans = 0;

        if(oneDigit != 0){
            ans += fn(sr.substring(0, n - 1))
        }

        if(twoDigit >= 10 && twoDigit <= 26){
            ans += fn(sr.substring(0, n - 2))
        }

        return ans;
    }

    return fn(s);
};

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = {};
    let fn = (sr) => {
        if(sr === '') return 1;
        if(sr === '0') return 0;

        if(sr in dp) return dp[sr];

        let n = sr.length;
        let oneDigit = sr.substring(n - 1)
        let twoDigit = sr.substring(n - 2)

        let ans = 0;

        if(oneDigit != 0){
            ans += fn(sr.substring(0, n - 1))
        }

        if(twoDigit >= 10 && twoDigit <= 26){
            ans += fn(sr.substring(0, n - 2))
        }
        dp[sr] = ans;
        return ans;
    }

    return fn(s);
};


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;

    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= n; i++) {
        let oneDigit = parseInt(s.substring(i - 1, i));
        let twoDigit = parseInt(s.substring(i - 2, i));
        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};


function maximumSubArraySum(arr){
    let n = arr.length;
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for(let i = 1; i < n; i++){
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

function maximumSubArraySum(arr){
    let n = arr.length;
    let maxSoFar = -Infinity;
    for(let i = 0; i < n; i++){
        let currentSum = 0;
        for(let j = i; j < n; j++){
            currentSum += arr[j];
            maxSoFar = Math.max(maxSoFar, currentSum);
        }   
    }
    return maxSoFar;
}   

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        currSum = Math.max(currSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
   
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
let n = arr.length;
    let maxSoFar = -Infinity;
    for(let i = 0; i < n; i++){
        let currentSum = 1;
        for(let j = i; j < n; j++){
            currentSum *= arr[j];
            maxSoFar = Math.max(maxSoFar, currentSum);
        }   
    }
    return maxSoFar;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let maxProdSoFar = arr[0];
    let minProdSoFar = arr[0];
    let totalMax = arr[0];

    for(let i = 1; i < arr.length; i++){
        let maxProdSoFarCopy = maxProdSoFar;
        maxProdSoFar = Math.max(arr[i], maxProdSoFar * arr[i], minProdSoFar * arr[i]);
        minProdSoFar = Math.min(arr[i], maxProdSoFarCopy * arr[i], minProdSoFar * arr[i]);
        totalMax = Math.max(totalMax, maxProdSoFar);
    }

    return totalMax;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let n = arr.length;
    let leftProd = rightProd = 1;
    let finalMax = -Infinity;
    for(let i = 0; i < n; i++){
        leftProd = leftProd * arr[i];
        rightProd = rightProd  * arr[n - i - 1];
        finalMax= Math.max(finalMax, leftProd, rightProd);
        if(leftProd === 0) leftProd = 1;
        if(rightProd === 0 ) rightProd = 1
    }

    return finalMax
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let fnc = (remStr) => {
        if(remStr === ''){
            return true;
        }
        let res = false;
        for(let i = 0; i < remStr.length; i++){
            let brStr = remStr.substr(0, i+1);
            if(wordDict.includes(brStr) && fnc(remStr.substr(i+1))){
                res = true;
            }

        }
        return res;
    }

    return fnc(s);
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = {}
    let fnc = (remStr) => {
        if(remStr === ''){
            return true;
        }

        if(remStr in dp) return dp[remStr];
        let res = false;
        for(let i = 0; i < remStr.length; i++){
            let brStr = remStr.substr(0, i+1);
            if(wordDict.includes(brStr) && fnc(remStr.substr(i+1))){
                res = true;
            }

        }
        return dp[remStr] = res;
    }

    return fnc(s);
};

// bootom up approach
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 **/
  
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = Array(n + 1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= n; i++){

        for(let j = 0; j < i; j++){
            let subStr = s.substring(j, i);
            if(dp[j] && wordDict.includes(subStr)){
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length;
    let dp = Array(n).fill(1);
    dp[0] = 1;
    let lisLength = 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
                lisLength = Math.max(lisLength, dp[i]);
            }
        }
    }

    return lisLength;
};

// top down approach with memoization

/**
 * @param {number[]} nums
 * @return {number}
 * */
var lengthOfLIS = function(nums) {
    let n = nums.length;
    let store = {};
    let fn = (currentIndex, prevIndex) => {
        if(currentIndex === n){
            return 0;
        }
        let key = currentIndex + ',' + prevIndex;
        if(key in store){
            return store[key];
        }   
        let taken = 0;
        if(prevIndex === -1 || nums[currentIndex] > nums[prevIndex]){
            taken = 1 + fn(currentIndex + 1, currentIndex);
        }
        let notTaken = fn(currentIndex + 1, prevIndex);
        store[key] = Math.max(taken, notTaken);
        return store[key];
    }
    return fn(0, -1);
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    sum  = sum / 2;

    let fn = (remS, start) => {
        if(remS === 0) return true;
        if(remS < 0) return false;
        for(let i = start; i < nums.length; i++){
            if(fn(remS - nums[i], i + 1)){
                return true;
            }
        }
        return false;
    }

    return fn(sum,0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    sum  = sum / 2;
    let dp = {};
    let fn = (remS, start) => {
        if(remS === 0) return true;
        if(remS < 0) return false;

        let key = start + '#' + remS;
        if(key in dp) return dp[key]
        for(let i = start; i < nums.length; i++){
            if(fn(remS - nums[i], i + 1)){
                return dp[key] = true;
            }
        }
        return dp[key] = false;
    }

    return fn(sum,0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if(sum % 2) return false;
    sum  = sum / 2;
    let dp = Array.from({length : sum + 1}, () => Array(nums.length).fill(undefined));
    let fn = (remS, start) => {
        if(remS === 0) return true;
        if(remS < 0) return false;

        if(dp[remS][start]) return dp[remS][start]
        for(let i = start; i < nums.length; i++){
            if(fn(remS - nums[i], i + 1)){
                return dp[remS][start] = true;
            }
        }
        return dp[remS][start] = false;
    }

    return fn(sum,0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if(sum % 2) return false;
    sum  = sum / 2;
    let dp = Array.from({length : sum + 1}, () => Array(nums.length).fill(undefined));
    let fn = (remS, start) => {
        if(remS === 0) return true;
        if(remS < 0) return false;

        if(dp[remS][start] != undefined) return dp[remS][start]
        for(let i = start; i < nums.length; i++){
            if(fn(remS - nums[i], i + 1)){
                return dp[remS][start] = true;
            }
        }
        return dp[remS][start] = false;
    }

    return fn(sum,0);
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let m = coins.length;

    let fn = (remS, start) => {
        if(remS === 0) return 1;
        if(remS < 0) return 0;
        let combination = 0;
        for(let i = start ; i < m; i++){
            combination += fn(remS - coins[i], i);
        }

        return combination;
    }

    return fn(amount, 0)
};


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let m = coins.length;
    let dp = {}
    let fn = (remS, start) => {
        if(remS === 0) return 1;
        if(remS < 0) return 0;

        let key = remS + "-" + start;
        if(key in dp) return dp[key];
        let combination = 0;
        for(let i = start ; i < m; i++){
            combination += fn(remS - coins[i], i);
        }

        return dp[key] = combination;
    }

    return fn(amount, 0)
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let m = coins.length;
    let dp = Array.from({length : amount + 1}, () => Array(m).fill(-1));
    let fn = (remS, start) => {
        if(remS === 0) return 1;
        if(remS < 0) return 0;

        if(dp[remS][start] !== -1) return dp[remS][start]
        let combination = 0;
        for(let i = start ; i < m; i++){
            combination += fn(remS - coins[i], i);
        }

        return dp[remS][start] = combination;
    }

    return fn(amount, 0)
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length : m + 1}, () => Array(n).fill(0));
    let fn = (x,y) => {
        if(x === 0 && y === 0) return 1;
        if(x < 0 || y < 0) return 0;
        return fn(x - 1, y) + fn(x, y - 1)
    }

    return fn(m - 1, n - 1)
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length : m}, () => Array(n).fill(0));
    let fn = (x,y) => {
        if(x === 0 && y === 0) return 1;
        if(x < 0 || y < 0) return 0;
        if(dp[x][y]) return dp[x][y]
        return dp[x][y] = fn(x - 1, y) + fn(x, y - 1)
    }

    return fn(m - 1, n - 1)
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length : m}, () => Array(n).fill(-1));

    for(let i = 0; i<m; i++) dp[i][0] = 1;
    for(let i = 0; i<n; i++) dp[0][i] = 1;

    for(let i =1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
        }
    }
    return dp[m - 1][n - 1]
};


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let dp = {};
    let isPalidrome = (left, right) => {
        if(left > right) return true;
        if(s[left] !== s[right]) return false;
        let key = left + ',' + right;
        if(!(key in dp)){
            dp[key] = isPalidrome(left + 1, right - 1);
        }
        return dp[key]
    }

    for(let i =0 ; i < n; i++){
        for(let j = i; j < n; j++){
            if(isPalidrome(i,j)){
                count++;
            }
        }
    }
    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // let n = s.length;
    // let count = 0;
    // let dp = {};
    // let isPalidrome = (left, right) => {
    //     if(left > right) return true;
    //     if(s[left] !== s[right]) return false;
    //     let key = left + ',' + right;
    //     if(!(key in dp)){
    //         dp[key] = isPalidrome(left + 1, right - 1);
    //     }
    //     return dp[key]
    // }

    // for(let i =0 ; i < n; i++){
    //     for(let j = i; j < n; j++){
    //         if(isPalidrome(i,j)){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    let n = s.length;
    let count = 0;

    let isPalidrome = (left, right) => {
        if(left > right) return true;
        if(s[left] !== s[right]) return false;

        return isPalidrome(left + 1, right - 1);
    }

    for(let i = 0; i< n; i++){
        for(let j = i; j < n; j++){
            if(isPalidrome(i,j)){
                count++;
            }
        }
    }

    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from({length : n}, () => Array(n).fill(null));
    let count = 0;
    for (let i = 0; i < n; i++){
        dp[i][i] = true;
        ++count;
        if( i < n - 1 && s[i] === s[i+1]){
            dp[i][i+1] = true;
            ++count;
        }
    }

    for(let len = 3; len <= n; len++){
        for(let i = 0; i <= n - len; i++){
            let j = i + len - 1;
            if(s[i] === s[j] && dp[i + 1][j - 1]){
                dp[i][j] = true;
                ++count;
            }
        }
    }

    return count;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array.from({length:n} , () => Array(n).fill(null));

    let ans = [0,0]

    for(let i = 0; i < n; i++){
        dp[i][i] = true;
        if(i < n - 1 && s[i] === s[i + 1]){
            dp[i][i + 1] = true;
            ans = [i, i + 1]
        }
    }

    for(let len = 3; len <= n; len++){
        for(let i = 0; i <= n - len; i++){
            let j = i + len - 1;
            if(s[i] === s[j] && dp[i + 1][j - 1]){
                dp[i][j] = true;
                ans = [i, j]
            }
        }
    }

    return s.substring(ans[0], ans[1] + 1);
};