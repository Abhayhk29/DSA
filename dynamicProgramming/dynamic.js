

function fibn(n){
    if (n <= 2){
        return 1;
    }

    return fibn(n - 1) + fibn(n - 2)
}

// memoziation
// solve the little program
// object 

function fibnMemo(n, memo ={}){
    if(n in memo){
        return memo[n];
    }

    if(n <= 2){
        return 1;
    }

    memo[n] = fibnMemo(n - 1, memo) + fibnMemo(n - 2, memo);
    return memo[n]; 
}


const fibTab = (n) => {
    // O(n) space
    // O(n) time
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}
// console.log(fibnMemo(50));
console.log(fibTab(50));