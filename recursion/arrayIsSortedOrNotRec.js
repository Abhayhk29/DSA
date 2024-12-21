// array is sorted or not
function sortedOrNot(arr,n){
    if(n == 1 || n == 0){
        return true;
    }

    if(arr[n] < arr[n - 1]){
        return false;
    }

    return sortedOrNot(arr, n - 1);
}

let arr = [2,4,21,72,84];
console.log(sortedOrNot(arr, arr.length - 1));