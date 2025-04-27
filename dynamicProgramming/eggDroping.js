// minimum number of 

let n  = 2;;
let m = 10;
let dp = Array(n + 1).fill(-1).map(() => Array(m + 1).fill(-1));
function eggDrop(e,f){
    if(f === 0 || f === 1){
        return f;
    }

    if(e === 1){
        return f;
    }

    let mn = Number.MAX_SAFE_INTEGER;

    for (let k = 1; k <= f ; k++) {
         let temo = 1 + Math.max(eggDrop(e - 1,  k - 1), eggDrop(e, f-k));
         mn = Math.min(mn,temo);
    }

    return mn;
}
function eggDropMemo(e,f){
    if(f === 0 || f === 1){
        return f;
    }

    if(e === 1){
        return f;
    }
    if(dp[e][f] !== -1) return dp[e][f]

    let mn = Number.MAX_SAFE_INTEGER;

    for (let k = 1; k <= f ; k++) {
         let temo = 1 + Math.max(eggDropMemo(e - 1,  k - 1), eggDropMemo(e, f-k));
         mn = Math.min(mn,temo);
    }
    dp[e][f] = mn
    return mn;
}


// console.log(eggDrop(1,2));
console.log(eggDrop(2,10));
console.log(eggDropMemo(2,10));