const gridTraveler = (m,n) =>{
    if (m === 1 && n == 1) return 1;
    if(m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m , n - 1);
}

const gridTravelerMemo = (m,n, memo ={}) =>{
    const key = m + '-'+ n;
    if(memo[key]) return memo[key];
    if (m === 1 && n == 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m , n - 1, memo);
    return memo[key];
}

// time complexity 
// space complexity

// brute force  memoized
// O(n^n+m)      O(m * n)
// O(n + m)      O(n + m)


const gridTravelerDynamic = (m , n) => {
    // o(mn) space and time
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    // console.log(table);

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 1][j] += current;
        }
    }
    // console.log(table);
    return table[m][n];
}





console.log(gridTravelerMemo(18,18));
console.log(gridTravelerDynamic(18,18));
// console.log(gridTraveler(18,18));