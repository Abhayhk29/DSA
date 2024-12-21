// knapsack diagram
// smallest valid input
// next call be smaller for the recursive

function knapsack(itemArr, weightArr, weight,n){
    if(n == 0 || weight == 0){
        return 0;
    }

    if(weightArr[n - 1] <= weight){
        return Math.max(itemArr[n - 1] + knapsack(itemArr, weightArr, weight - weightArr[n - 1], n- 1), knapsack(itemArr, weightArr, weight, n-1));
    } else {
        return knapsack(itemArr, weightArr, weight, n-1)
    }

}

let profit = [ 60, 100, 120 ]; 
let weight = [ 10, 20, 30 ]; 
let W = 50; 
let n = profit.length; 

console.log(knapsack(profit, weight,W,n));