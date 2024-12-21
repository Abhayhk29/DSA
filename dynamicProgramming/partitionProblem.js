// we need to find the partition such that both are equal
// step : - if the sum is even partition can be possible if its odd than the
// partition is not possible


function findPartiotion(arr,n){
    let sum  = 0;

    for (const ar of arr) {
      sum += ar;  
    }

    if(sum % 2 != 0){
        return false;
    }

    const checkhelperFunction = (arr,n,sum) => {
        if(sum === 0){
            return true;
        }

        if(n == 0 && sum !== 0){
            return false;
        }

        if(arr[n - 1] > sum){
            return checkhelperFunction(arr, n - 1, sum)
        }

        return checkhelperFunction(arr, n- 1, sum ) || checkhelperFunction(arr, n- 1, sum - arr[n - 1] ); 
    }
    
    return checkhelperFunction(arr,n, Math.floor(sum / 2));
}

function findPartiotionDp(arr,n){
    let sum  = 0;

    for (const ar of arr) {
      sum += ar;  
    }

    if(sum % 2 != 0){
        return false;
    }

    let dp = new Array(n + 1).fill( new Array(sum + 1).fill(-1))

    const checkhelperFunctionDp = (arr,n,sum, dp) => {
        if(sum === 0){
            return true;
        }

        if(n == 0 && sum !== 0){
            return false;
        }

        if(dp[n][sum] != -1){
            return dp[n][sum];
        }

        if(arr[n - 1] > sum){
            return checkhelperFunctionDp(arr, n - 1, sum, dp)
        }

        return dp[n][sum] = checkhelperFunctionDp(arr, n- 1, sum , dp) || checkhelperFunctionDp(arr, n- 1, sum - arr[n - 1] , dp); 
    }
    
    return checkhelperFunctionDp(arr,n, Math.floor(sum / 2), dp);
}


let arr = [3,1,5,9,12,1,6,2,1]
let n = arr.length;

console.log(findPartiotionDp(arr,n));