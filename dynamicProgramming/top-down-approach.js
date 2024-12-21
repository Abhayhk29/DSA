// top down appoach
// same ever for memoziation 
// reduce recursive
// recursive base condition -> top down initilization

function knapSack(w, wt, val, n) {
    let t = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        t[i] = new Array(w + 1).fill(-1);
    }
    return fun(w, wt, val, n, t);
}


function knapsackDp(itemArr, weightArr, weight,n){
    let t = []
    for (let i = 0; i <= n + 1; i++) {
        t[i] = [];
        for (let j = 0; j <= weight + 1; j++) {
            if(i == 0 || j == 0){
                t[i][j] = 0
            }else{
                t[i][j] = ''
            }
        }
    }

    for (let i = 1; i <= n + 1; i++) {
        for (let j = 1; j <= weight + 1; j++) {
            if(weightArr[i - 1] <= j){
                t[i][j] = Math.max(itemArr[i-1] + t[i - 1][j - weightArr[i - 1]], t[i - 1] [j])
                // return Math.max(itemArr[n - 1] + knapsackDp(itemArr, weightArr, weight - weightArr[n - 1], n- 1), knapsackDp(itemArr, weightArr, weight, n-1));
            } else {
                t[i][j] = t[i - 1] [j];
            }
        }
    }
    
    console.log(t);
    return t[n][weight];
}

// let arrItem = [1,3,4,5];
// let weightArr = [1,4,5,7];
// let maxWeight = 7;
let arrItem = [60,100,120];
let weightArr = [10,20,30];
let maxWeight = 50;

console.log(knapsackDp(arrItem, weightArr, maxWeight, arrItem.length))
// let w = maxWeight;
// let n = weightArr.length;
// let t = []
// for (let i = 0; i <= n + 1; i++) {
//     t[i] = [];
//     for (let j = 0; j <= w + 1; j++) {
//         if(i == 0 || j == 0){
//             t[i][j] = 0
//         }else{
//             t[i][j] = ''
//         }
//     }
// }



// console.log(t);
// console.log(t.length);


