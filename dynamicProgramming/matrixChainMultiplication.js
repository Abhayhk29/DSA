// Matrix Chain Multiplication
// string or array will be given 
// how to identify it
// MCM

// input = arr 
// number if multiplication should be reduced

function solve(arr, i , j){
    if( i >= j){
        return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
        let minTest = solve(arr,i, k) + solve(arr, k + 1, j)+ 
                        (arr[ i - 1] * arr[k]* arr[j]);
        min = Math.min(min, minTest)
    }

    return min;
}
function solveDp(arr, i , j, memo){
    if( i >= j){
        return 0;
    }

    if(memo[i][j] !== -1) return memo[i][j];

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
        let minTest = solveDp(arr,i, k) + solveDp(arr, k + 1, j)+ 
                        (arr[ i - 1] * arr[k]* arr[j]);
        min = Math.min(min, minTest)
    }

    return memo[i][j] = min;
}

let fd = [2, 1, 3, 4];
let m = fd.length;

let dp = Array(m + 1).fill().map(() => Array(m + 1).fill(-1));
console.log(dp);

console.log(solve(fd, 1 , fd.length - 1));
console.log(solve(fd, 1 , fd.length - 1, dp));


// palidrome based on the LCM 
// minimum number of partition 
// 

function isPalidrome(str,left,right){
    while (left < right) {
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function solvePal(str,i,j){
    if(i >= j){
        return 0;
    }

    if(isPalidrome(str,i,j)){
        return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
        let temp = solvePal(str,i,k) + solvePal(str, k+ 1,j) + 1;
        min = Math.min(min, temp);
    }

    return min;
}

function solvePalDP(str,i,j,memo){
    if(i >= j){
        return 0;
    }

    if(isPalidrome(str,i,j)){
        return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
        let temp = solvePalDP(str,i,k, memo) + solvePalDP(str, k+ 1, j, memo) + 1;
        min = Math.min(min, temp);
    }

    return memo[i][j] = min;
}

function solvePalDPOpt(str,i,j,memo){
    if(i >= j){
        return 0;
    }

    if(isPalidrome(str,i,j)){
        return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
        let left, right;
        if(memo[i][k] != -1){
            left = memo[i][k];
        }else{
            left = solvePalDPOpt(str,i,k, memo);
        }

        if(memo[k +1 ][j] != -1){
            right = memo[k+1][j];
        }else{
            right = solvePalDPOpt(str, k+ 1, j, memo);
        }
        let temp = left + right + 1;
        min = Math.min(min, temp);
    }

    return memo[i][j] = min;
}

// let str = 'aab'
let str = 'nitik'
let m1 = str.length;

let dp1 = Array(m1 + 1).fill().map(() => Array(m1 + 1).fill(-1));

console.log(solvePalDP(str,0,str.length - 1,dp1));
console.log(solvePalDPOpt(str,0,str.length - 1,dp1));