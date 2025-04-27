let s1 = 'AABEBCDD';
let m = s1.length;

let dp = Array(m + 1).fill().map(() => Array(m + 1).fill(-1));

function findLongestRepeatingSubsequence(m,n,s,memo){
    if(m === 0 || n === 0){
        return 0;
    }

    if(memo[m][n] !== -1) return memo[m][n];

    if(s[m - 1] === s [n - 1] && m !== n){
        memo[m][n] =  1 + findLongestRepeatingSubsequence(m - 1, n - 1, s, memo);
        return memo[m][n];
    }

    memo[m][n] =  Math.max(findLongestRepeatingSubsequence(m - 1, n, s, memo), findLongestRepeatingSubsequence(m, n - 1, s, memo));
    return memo[m][n];
    
}
function findLongestRepeatingSubsequenceMemo(m,n,s){
    if(m === 0 || n === 0){
        return 0;
    }

    if(s[m - 1] === s [n - 1] && m !== n){
        return 1 + findLongestRepeatingSubsequenceMemo(m - 1, n - 1, s);
    }

    return Math.max(findLongestRepeatingSubsequenceMemo(m - 1, n, s), findLongestRepeatingSubsequenceMemo(m, n - 1, s));
    
}

function findLongDp(m, n, s){
    let dp =Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if(s[i -1] === s[j - 1] && i !== j){
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);                
            }
        }
    }
    return dp[m][n];
}

console.log(findLongestRepeatingSubsequence(m, m, s1,dp));
console.log(findLongestRepeatingSubsequenceMemo(m, m, s1));
console.log(findLongDp(m, m, s1));