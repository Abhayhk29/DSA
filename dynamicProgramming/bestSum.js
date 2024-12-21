const bestSum = (target, arr) => {

    if(target === 0) return [];

    if(target < 0) return null;

    let shortComibinataion = null;

    for (const num of arr) {
        const rem = target - num;
        const remCom = bestSum(rem,arr);
        if(remCom !== null){
            const com = [...remCom, num];
            // if the com is shorter than the current update it
            if(shortComibinataion === null || com.length < shortComibinataion.length){
                shortComibinataion = com;
            }
        }
    }

    return shortComibinataion;
}

// complexity 
// time: O(n ^ m * m)
// space : O(m ^2)

const bestSumMemo = (target, arr, memo = {}) => {
     if(target in memo) return memo[target];

    if(target === 0) return [];

    if(target < 0) return null;

    let shortComibinataion = null;

    for (const num of arr) {
        const rem = target - num;
        let remCom = bestSumMemo(rem,arr,memo);
        
        if(remCom !== null){
            const com = [...remCom, num];
            // if the com is shorter than the current update it
            if(shortComibinataion === null || com.length < shortComibinataion.length){
                shortComibinataion = com;
            }
        }
    }
    
    memo[target] = shortComibinataion
    return shortComibinataion;
}

// complexity 
// time: O( m^2 * n)
// space : O(m^2)

const bestSumMemoTab = (target, arr = {}) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    // time : O(m^2n)
    // space : O(m^2)

    for (let i = 0; i < target; i++) {
        if(table[i] !== null){
            for (const num of arr) {
                let com = [...table[i] , num];
                // if this current combinations is shorter than what is already stored
                if(!table[i+ num] || table[i+ num].length > com.length ){
                    table[i + num] = com;
                }
            }
        }
        
    }

    return table[target];
}


console.log(bestSum(7,[4,3,5,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSumMemo(100,[1, 2, 5, 25]));
console.log(bestSumMemoTab(100,[1, 2, 5, 25]));