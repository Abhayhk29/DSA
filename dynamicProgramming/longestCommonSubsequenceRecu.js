// longest common subsequence
// str1 = 'abcdgh'
// str2 = 'abedfhr'
// smallest valid input
// 

const longCommonSubsequence = (str, str2, m, n) => {
   if(m == 0 || n == 0)
       return 0;
    
    if(str[m - 1] === str2[n - 1]){
        return 1 + longCommonSubsequence(str,str2, m - 1, n - 1);
    } else {
        return Math.max(longCommonSubsequence(str,str2, m - 1, n), longCommonSubsequence(str,str2, m , n - 1))
    }
}

let str1 = 'abcdgh'
let str2 = 'abedfhr'

// r = h
// abdh : 4
let m = str1.length
let n = str2.length

const longCommonSubsequenceDp = (str, str2, m, n,t) => {
    if(t[m][n] !== -1) return t[m][n];
    
    if(m == 0 || n == 0)
        return 0;
     
     if(str[m - 1] === str2[n - 1]){
         t[m][n] = 1 + longCommonSubsequenceDp(str,str2, m - 1, n - 1, t);
         return t[m][n];
     } else {
         t[m][n] = Math.max(longCommonSubsequenceDp(str,str2, m - 1, n,t), longCommonSubsequenceDp(str,str2, m , n - 1,t))
         return t[m][n];
     }
 }

let t = new Array(m + 1);
for (let i = 0; i <= n; i++) {
    t[i] = new Array(n + 1).fill();
}

const longCommonSubsequenceTD = (str, str2, m, n,dp) => {     
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if(i == 0 || j == [0]){
                dp[i][j] = 0;
                // continue;
            }
            else if(str[i - 1] === str2[j - 1]){
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1])
            }
            
        }
        
    }
    // console.log(dp);
    return dp[m][n];
    
    //  if(str[m - 1] === str2[n - 1]){
    //      return 1 + longCommonSubsequenceTD(str,str2, m - 1, n - 1);
    //  } else {
    //      return Math.max(longCommonSubsequenceTD(str,str2, m - 1, n), longCommonSubsequence(str,str2, m , n - 1))
    //  }
 }



console.log(longCommonSubsequenceTD(str1, str2, m, n, t));