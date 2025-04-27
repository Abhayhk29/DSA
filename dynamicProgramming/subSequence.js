
let str1 = 'ABC';
let str2 = 'ACD';
// let str1 = 'AGGTAB' || 'abcdgh';
// let str2 = 'GXTXAYB' || 'abedfhr';
let m = str1.length;
let n = str2.length;

let t = Array(n + 1).fill(-1).map(() => Array(m + 1).fill(-1));
console.log(t);

function subsequence(str1, str2, m, n){
    if(m === 0 || n === 0){
        return 0;
    }

    if(str1[m - 1] === str2[n - 1]){
        return 1 + subsequence(str1,str2, m - 1, n - 1);
    }else{
        return Math.max(subsequence(str1,str2,  m - 1, n), subsequence(str1,str2,  m, n - 1))
    }
}

function subsequencememo(str1, str2, m, n, t){
    if(m === 0 || n === 0){
        return 0;
    }

    if(t[m][n] !== -1) return t[m][n];

    if(str1[m - 1] === str2[n - 1]){
        t[m][n] =  1 + subsequencememo(str1,str2, m - 1, n - 1,t);
        return t[m][n]
    }else{
        t[m][n] = Math.max(subsequencememo(str1,str2,  m - 1, n, t), subsequencememo(str1,str2,  m, n - 1, t))
        return t[m][n]
    }
}


function dynamicDp(str1, str2, m,n){
    let t = Array(m + 1).fill().map(() => Array(n + 1).fill())
    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if(i == 0 || j == 0){
                t[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if(str1[i] == str2[j]){
                t[i][j] = 1 + t[i - 1][j - 1];
            }else{
                t[i][j] = Math.max(t[i-1][j],t[i][j-1]);
            }
            
        }
    }

    return t[m][n];
}

console.log(dynamicDp(str1, str2, m,n));
console.log(subsequence(str1, str2, m,n));
console.log(subsequencememo(str1, str2, m, n, t ));



// shortest super sequence :  m + n - LCS 
// s