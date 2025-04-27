let str = 'abcde';
let str1 = 'abfce';
let m = str.length
let n = str1.length

let t = Array(n + 1).fill(-1).map(() => Array(m + 1).fill(-1));

function subStringMemo(s1, s2, m, n){
    let dp = Array(m+1).fill(0).map(() => Array(n + 1).fill(-1));
    // console.log(dp);
    let answer = -Infinity;
    function helper(s1, s2, m, n){
        if(n === 0 || m === 0){
            return 0;
        }

        if(dp[m][n] !== -1) return dp[m][n];

        let temp = 0;

        if(s1[m - 1] === s2[n-1]) temp = 1 + helper(s1, s2, m - 1, n - 1);

        answer = Math.max(temp, answer);

        helper(s1,s2, m - 1, n);
        helper(s1,s2, m, n - 1);

        return dp[m][n] = temp;
    }

    helper(s1, s2, m , n);
    return answer;

}

function substringSim(str1, str2, m, n, len){
    if(m === 0 || n === 0){
        return len;
    }
    // if(t[m][n] !== -1) return t[m][n];
    let res = len
    if(str1[m - 1] === str2[n - 1]){
       res = substringSim(str1,str2, m - 1, n - 1, len + 1);
    }
    let res1 = substringSim(str1,str2,  m - 1, n, 0);
    let res2 = substringSim(str1,str2,  m, n - 1, 0)
    
    return Math.max(res, Math.max(res1, res2));
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
                t[i][j] = 0;
            }
            
        }
    }

    return t[m][n];
}

// function substringPrac(s1, s2, m, n){
//     if(m === 0 || n === 0 || s1[m- 1] !== s2[n - 1]){
//         return 0;
//     }

//     return 1 + substringPrac(s1, s2, m - 1, n - 1);
// }
let s1 = "geeksforgeeks";
let s2 = "practicewritegeekscourses";
// console.log(substringPrac(s1, s2, s1.length, s2.length ));
console.log(dynamicDp(s1, s2, s1.length, s2.length ));
// console.log(subStringMemo(s1, s2, s1.length, s2.length ));
// console.log(maxCommStr(s1, s2));
// console.log(subStringMemo(str, str1, m, n));
// console.log(substringSim(str, str1, m, n , 0));
console.log(dynamicDp(str, str1, m, n));
// console.log(substringMemo(str, str1, m, n , 0, t));