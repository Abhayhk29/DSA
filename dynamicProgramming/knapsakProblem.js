// knapsak
// fractional Knapsak : Greedy : Item can be taken as part
// 0/1 Knapsak : cannot take as fractional : No Multipal Instamce
// unbounded Knapsak : no limition : Multiple item can be added.
// placing in the bag
// maximum constraint : maximum size to take elements in the bag
// Identify solution:weight value and max capacity
// o/p max profit
// choice and optimal (max, largest, etc..)
// recursion + storage :  DP

// knapsak Recursion

// maximum profit
// base condition:- think of the smallest of the valid i/p
// smaller input for recursion 

// RECURSIVE + STORAGE : tOP dOWN SOLUTION
let arrItem = [1,3,4,5];
let weightArr = [1,4,5,7];
let maxWeight = 7;
function recursiveKnapsak(itemArr, weighArr, weight, n){
    if(n === 0 || weight === 0){
        return 0;
    }

    if(weighArr[n - 1] <= weight){
        return Math.max(itemArr[n - 1] + recursiveKnapsak(itemArr, weighArr, weight - weighArr[n - 1], n - 1),recursiveKnapsak(itemArr, weighArr, weight, n - 1));
    }else {
        return recursiveKnapsak(itemArr, weighArr, weight, n - 1);
    }

}

function knapSack(w, wt, val, n) {
    let t = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        t[i] = new Array(w + 1).fill(-1);
    }
    return fun(w, wt, val, n, t);
}

function fun(w, wt, val, n, t) {
    if (n <= 0 || w <= 0) return 0;

    if (t[n][w] != -1) return t[n][w];

    if (wt[n - 1] <= w) {
        t[n][w] = Math.max(val[n - 1] + fun(w - wt[n - 1], wt, val, n - 1, t), 0 + fun(w, wt, val, n - 1, t));
        return t[n][w];
    } else if (wt[n - 1] > w) {
        t[n][w] = 0 + fun(w, wt, val, n - 1, t);
        return t[n][w];
    }
}

// console.log(recursiveKnapsak(arrItem, weightArr, maxWeight, 4));
console.log(knapSack(maxWeight, weightArr, arrItem, 4));


// top down method
