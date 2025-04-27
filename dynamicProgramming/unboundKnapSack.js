// road cutting problem
// recutssion appraoach


function recursionRoadCutting(arr, len){
    if(len === 0) return 0;

    let ans = 0;

    for (let i = 1; i <= len; i++) {
        ans = Math.max(ans, arr[i - 1] + recursionRoadCutting(arr,len - i));
    }

    return ans;
}

function recursionRoadCuttingmemo(arr, len, memo){
    if(len === 0) return 0;

    if(memo[len -1] !== -1){
        return memo[len - 1]
    }
    let ans = 0;

    for (let i = 1; i <= len; i++) {
        ans = Math.max(ans, arr[i - 1] + recursionRoadCuttingmemo(arr,len - i, memo));
    }
    memo[len - 1] = ans
    return memo[len - 1];
}

function rodProblemDp(arr,len){
    let t = []
    for (let i = 0; i <= arr.length + 1; i++) {
        t[i] = [];
        for (let j = 0; j <= len + 1; j++) {
            t[i][j] = 0
        }
    }

    // console.log(t);
    // return;
    for (let i = 1; i < arr.length + 1; i++) {
        for (let j = 1; j < len + 1; j++) {
            if(arr[i - 1] <= j){
                t[i][j] = Math.max(arr[i - 1] + t[i][j - arr[i - 1]], t[i - 1][j])
            }else{
                t[i][j] = t[i - 1][j]
            }
        }
    }
    console.log(t);
    return t[arr.length][len];
}

let arr = [1, 5, 8, 9, 10, 17, 17, 20];
let len = arr.length;
let memo = Array(len).fill(-1)

console.log(rodProblemDp(arr, len));
// console.log(recursionRoadCuttingmemo(arr, len,memo));

function rodCutting() {
    // Define the profits and lengths for each possible rod piece.
    const price = [1, 5, 8, 9, 10, 17, 17, 20]; // Profits associated with rod pieces.
    const length = [1, 2, 3, 4, 5, 6, 7, 8]; // Lengths of corresponding rod pieces.
    const n = 8; // Total length of the rod.
   
    // Create a 2D array 'dp' for dynamic programming.
    const dp = Array(price.length + 1).fill(0).map(() => Array(n + 1).fill(0));
   
    // Fill in the 'dp' array to compute the maximum profit using dynamic programming.
    for (let i = 1; i < price.length + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (length[i - 1] <= j) {
          // If the current rod piece's length can be accommodated, consider both options:
          // 1. Cutting the current rod piece and adding its profit to the previous state.
          // 2. Keeping the current rod piece intact and keeping the previous state.
          dp[i][j] = Math.max(price[i - 1] + dp[i][j - length[i - 1]], dp[i - 1][j]);
        } else {
          // If the current rod piece's length exceeds the available length, exclude it.
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
   
    // Print the maximum profit achievable by cutting the rod.
    console.log("Maximum Profit: " + dp[price.length][n]);
  }
   
  rodCutting();