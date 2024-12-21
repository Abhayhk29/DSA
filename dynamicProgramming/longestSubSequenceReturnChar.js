// input 1 : AGGTAB
// iNPUT 2 : GXTXAYB
// output : 4 (GTAB)

let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';
let m = str1.length;
let n = str2.length;

const longestCommSequence = (str1,str2, m , n) => {
    if(m === 0 || n === 0){
        return '';
    }
    if(str1[m-1] === str2[n - 1]){
        let str = str1[m-1]
        return longestCommSequence(str1, str2, m - 1, n - 1) + str;
    } else{
        let st = longestCommSequence(str1,str2, m -1,n)
        let st2 = longestCommSequence(str1,str2, m , n- 1);
        return st2.length > st.length ? st2 : st;
    }
}

const longestCommSequenceDp = (str1,str2, m , n, dp) => {
    if(m == 0 || n == 0){
        return '';
    }

    if(str1[m-1] == str2[n - 1]){
        dp[m][n] = longestCommSequenceDp(str1, str2, m - 1, n - 1,dp) + str1[m-1];
        return dp[m][n]
    } 

    if(dp[m][n] != -1){
        return dp[m][n];
    }
    // console.log(dp);
    let st = longestCommSequenceDp(str1,str2, m -1,n, dp)
    let st2 =  longestCommSequenceDp(str1,str2, m , n- 1, dp);

    dp[m][n] = st2.length > st.length ? st2 : st
    return dp[m][n];
}

let dp = new Array(m + 1)
for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n+1).fill(-1)
}

let dpTab = new Array(m + 1)
for (let i = 0; i < m + 1; i++) {
    dpTab[i] = new Array(n+1);
}

console.log(longestCommSequenceDp(str1,str2,m,n, dp));

const dynamicTab = (str1, str2, m, n,dp) => {
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if(i === 0 || j === 0){
                dp[i][j] = 0;
            } else if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            
        }
        
    }
    return dp[m][n];
}
// console.log(dynamicTab(str1,str2,m,n,dpTab));




