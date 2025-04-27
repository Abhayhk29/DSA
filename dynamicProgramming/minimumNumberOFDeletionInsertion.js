// Minimum Number of Insertion and Deletion to convert String a to String b
// subsequence
function shortestCommonSuperDequence(s1, s2){
    let m = s1.length;
    let n = s2.length;

    let l = lcs(s1, s2, m, n)

    return (m + n - l);
}


function lcs(s1, s2, m, n){
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if(i === 0 || j === 0){
                dp[i][j] = 0
            } else if(s1.charAt( i - 1) === s2.charAt( j  - 1)){
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

console.log(shortestCommonSuperDequence("AGGTAB","GXTXAYB"));