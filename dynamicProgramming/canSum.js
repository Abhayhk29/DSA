function canSum(target, arr){
    if(target === 0){
        return true;
    }

    if(target < 0) return false;

    for (const num of arr) {
        const remmainder = target - num;
        if(canSum(remmainder, arr) === true){
            return true;
        }
    }

    return false;
}

// time O(n^m)
// space O(m)

function canSumMemo(target, arr, memo = {}){
    if(target in memo) return memo[target];
    if(target === 0){
        return true;
    }

    if(target < 0) return false;

    for (const num of arr) {
        const remmainder = target - num;
        if(canSumMemo(remmainder, arr,memo) === true){
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

// time O(m * n) for memo
// space O(m) for memo


const canSumDynamic = (target, arr) => {
    // time O(mn)
    // O(m) space
    const table = Array(target + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < target; i++) {
        if(table[i] === true){
            for (const num of arr) {
                table[i + num] = true;
            }
        }
        
    }

    return table[target];
}




// console.log(canSum(7,[2,3]));
// console.log(canSum(7,[2,4]));
console.log(canSumDynamic(7,[5,3, 4, 7]));
console.log(canSumMemo(300,[7,14]));
console.log(canSumDynamic(300,[7,14]));
// console.log(canSumMemo(7,[5,3, 4, 7]));