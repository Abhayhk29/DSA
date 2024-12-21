// second largest array in array

function secondLargest(arr){
    let res = arr.sort((a,b) => a - b);
    return res.reverse().splice(0,2)[1];
}

function secongLargest2(arr){
    let tempArr = Array(1);
    tempArr[0] = tempArr[1] = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > tempArr[0]){
            tempArr[1] = tempArr[0];
            tempArr[0] = arr[i];
        } else if(arr[i] > tempArr[1]){
            tempArr[1] = arr[i];
        }
        
    }

    return tempArr[1];
}

console.log(secongLargest2([21,45,67,78,32,878,99]));
// console.log(secondLargest());