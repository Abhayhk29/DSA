
// let str1 = 'ABC';
// let str2 = 'ACD';
let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';
let m = str1.length;
let n = str2.length;

let t = Array(m + 1).fill(-1).map(() => Array(n + 1).fill(-1));
// console.log(t);

function subsequence(str1, str2, m, n){
    if(m === 0 || n === 0){
        return '';
    }

    if(str1[m - 1] === str2[n - 1]){
        return subsequence(str1,str2, m - 1, n - 1) + str1[m - 1] ;
    }else{
        let first = subsequence(str1,str2,  m - 1, n)
        let second = subsequence(str1,str2,  m , n - 1)
        return first.length > second.length ? first : second;
    }
}

function subsequencememo(str1, str2, m, n, t){
    if(m === 0 || n === 0){
        return '';
    }

    if(t[m][n] !== -1) return t[m][n];

    if(str1[m - 1] === str2[n - 1]){
        t[m][n] =   subsequencememo(str1,str2, m - 1, n - 1,t) + str1[m - 1];
        // return t[m][n]
    }else{
        let first = subsequencememo(str1,str2,  m - 1, n,t)
        let second = subsequencememo(str1,str2,  m , n - 1,t)
        t[m][n] = first.length > second.length ? first : second;
        // return t[m][n]
        //  = Math.max(subsequencememo(str1,str2,  m - 1, n, t), subsequencememo(str1,str2,  m, n - 1, t))
    }
    return t[m][n]
}


function dynamicDp(str1, str2, m,n){
    let t = Array(m + 1).fill(0).map(() => Array(n + 1).fill(''))
    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if(i == 0 || j == 0){
                t[i][j] = '';
            }
        }
    }

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if(str1[i - 1] == str2[j - 1]){
                t[i][j] = t[i - 1][j - 1] + str1[i - 1];
            }else{
                let first = t[i - 1][j];
                let second = t[i][j - 1]
                t[i][j] = first.length > second.length ? first : second;
            }
            
        }
    }
    
    return t[m][n];
}

console.log(dynamicDp(str1, str2, m,n));
// console.log(subsequence(str1, str2, m,n));
// console.log(subsequencememo(str1, str2, m, n, t ));