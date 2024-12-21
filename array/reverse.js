// reverse Array Simple reverser for loop
function reverseArray(arr){
    let newArr = [];
    for (let index = arr.length - 1; index > 0; index--) {
        newArr.push(arr[index]);
    }
    return newArr;
}


// reverse Array
// console.log(reverseArray([1,2,3,4,5]));

// Recurssion way to do the Reverse array

function recursiveReverseArray(arr, start, end){
    if(start >= end){
        return;
    }

    let temp = arr[end];
    arr[end] = arr[start]
    arr[start] = temp;
    
    recursiveReverseArray(arr, start+1, end -1);
    return arr;
}

function initRecusiveArr(arr){
    return recursiveReverseArray(arr, 0, arr.length - 1);
}

console.log(initRecusiveArr([5,4,3]));