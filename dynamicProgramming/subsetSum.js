let arr = [2,3,7,8,10];
let sum = 11;

// if present or not

// let t = []
// for (let i = 0; i <= arr.length + 1; i++) {
//     t[i] = [];
//     for (let j = 0; j <= sum + 1; j++) {
//         if(i == 0){
//             t[i][j] = false
//         }else if ( j == 0){
//             t[i][j] = true
//         } else {
//             t[i][j] = ''
//         }
//     }
// }

// console.log(t);

let n = arr.length;

let dp = Array.from({length: n + 1}, () => Array(sum + 1).fill(false));
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
        if(j == 0){
            dp[i][j] = true;
        }else if(i == 0){
            dp[i][j] = false;
        } else if(arr[i - 1] <= j){
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]]
        }else{
            dp[i][j] = dp[i - 1][j]
        }
        
    }
    
}
console.log(dp);

