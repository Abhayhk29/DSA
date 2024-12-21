// let arr = [21,45,67,78,32,878,99];
// print an array of largest three elements
// other best way is to use javascript sort method

function largestThreeNumberArr(arr){
    if(arr.length < 3){
        return 'invalid input';
    }

    let tempArr = new Array(3);
    tempArr[0] = tempArr[1] = tempArr[2] = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > tempArr[0]){
            tempArr[2] = tempArr[1];
            tempArr[1] = tempArr[0];
            tempArr[0] = arr[i];
        } else if (arr[i] > tempArr[1]){
            tempArr[2] = tempArr[1];
            tempArr[1] = arr[i]
        } else if (arr[i] > tempArr[2]){
            tempArr[2] = arr[i];
        }
        
    }
    return tempArr;
}

function sortFunction(arr){
    let res = arr.sort((a,b) => b - a);
    return res.reverse().splice(0,3);
}

console.log(largestThreeNumberArr([21,45,67,78,32,878,99]));
console.log(sortFunction([ 12, 13, 1, 10, 34, 1 ]));
