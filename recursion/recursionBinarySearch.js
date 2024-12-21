function recursionBinarySearch(arr, target, start, end){
    if(start > end){
        return -1;
    }

    let middle = Math.floor((start + (end - start) / 2));

    if(arr[middle] == target){
        return middle;
    }

    if (target < arr[middle]){
        return recursionBinarySearch(arr, target, start, middle - 1);
    } 

    return recursionBinarySearch(arr, target, middle + 1, end);
}

// function binarySearchRex(arr, tar, start, end)
let arr = [-1,0,3,5,9,12];
console.log(recursionBinarySearch(arr, 9, 0, arr.length - 1));