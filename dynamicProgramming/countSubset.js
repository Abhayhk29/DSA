let arr = [2,3,5,6,8,10];
let sum = 10;

function countSubset(arr, sum, i = 0){
    if(sum === 0){
        return 1;
    }

    if(arr.length === i){
        return 0;
    }

    const exclude = countSubset(arr, sum, i + 1);
    const include = countSubset(arr, sum - arr[i], i + 1);

    return exclude + include;
}


function countSubsetDp(arr,sum){
    let n = arr.length;
    let t = [];
  for (let i = 0; i <= n + 1; i++) {
    t[i] = [];
    for (let j = 0; j <= sum + 1; j++) {
      if (i == 0) {
        t[i][j] = 0;
      }
      if (j == 0) {
        t[i][j] = 1;
      } else {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
        if(arr[i - 1] <= j){
            t[i][j] = t[i - 1][j] + t[i - 1][j - arr[i-1]]
        }else{
            t[i][j] = t[i - 1][j];
        }
        
    }
    
  }

  return t[n][sum]
}

console.log(countSubsetDp(arr,sum));