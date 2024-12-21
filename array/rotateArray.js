// Rotate and Print at specific Number
// [5,4,3,2,1] by left
function rotateAndBySpecificTime(arr , num){
    if(num > arr.length - 1){
        return 'Out of bound';
    }
    let temp = [];
    let k = 0;
    for (let index = num; index < arr.length; index++) {
        temp[k] = arr[index];
        k++
    }

    for (let i = 0; i < num; i++) {
        temp[k] = arr[i];
        k++;
    }

    return temp;
}


// second method Rotate it by the left
function rotateByLeft(arr, d) {
    let start = 1;
    let arrSize = arr.length;
    while (start <= d) {
        let last = arr[0];
        for (let i = 0; i < arrSize - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arrSize - 1] = last;
        start++
    }

    return arr;
}


// right rotate arr

function rightRotateArr(arr,d){
    for (let i = 0; i < d ; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
}


function rightRotateArrSecond(arr,d){
    let newArray = arr.splice(arr.length - d);
    for (let i = 0; i < newArray.length; i++) {
        arr.splice(i,0,newArray[i]);
    }

    return arr;
}

console.log(rightRotateArrSecond([1, 3, 5, 7, 9],6));