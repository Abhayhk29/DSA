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


console.log(countSubset(arr,sum));