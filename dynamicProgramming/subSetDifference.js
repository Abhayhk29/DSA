// let arr = [1, 6, 11, 5]; 
let arr = [1, 5, 11, 4]; 

function minDifference(arr){
    let  sumTotal = 0;

    for (const num of arr) {
        sumTotal += num;
    }

    console.log(sumTotal);
    return findDiffRecursiveCall(arr, arr.length,0,sumTotal)
}


function minDifferenceSubset(arr){
    let  sumTotal = 0;

    for (const num of arr) {
        sumTotal += num;
    }

    let n = arr.length;

    let t = Array(n + 1).fill(null).map(() => Array(sumTotal + 1).fill(false));

    for(let i = 0; i<n+1; i++){
        for(let j = 0; j<sumTotal+1; j++){
        // If there is no element in the array, no subset sum is possible except one case when sum=0
            if(i == 0) t[i][j] = false; 
            if(j==0) t[i][j] = true;//Sum zero is possible for every array size
        }
    }

    for (let i = 1; i <= n; i++) {
        for (let sum = 1; sum <= sumTotal; sum++) {
        
            // Exclude the current element
            
            // Include the current element if sum >= arr[i - 1]
            if (sum >= arr[i - 1]) {
                t[i][sum] = t[i][sum] 
                        || t[i - 1][sum - arr[i - 1]];
            }else{
                t[i][sum] = t[i - 1][sum];

            }
        }
    }

    let minDiff = Number.MAX_VALUE;
// console.log(t);
    for (let sum = 0; sum < sumTotal / 2; sum++) {
        if(t[n][sum]){
            minDiff = Math.min(minDiff, Math.abs((sumTotal - sum) - sum));
        }
        
    }

    return minDiff
}


console.log(minDifferenceSubset(arr));
// console.log(minDifferenceSubset([1, 5, 11, 5]));