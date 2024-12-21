// move all zero in last of the array
//  [1,2,4,9,0,6,0,3,0,1,67] => [1,2,4,9,3,1,67,0,0]

function movezero(arr){
    let zeroFind = 0;
    let arrLength = arr.length - 1;
    for (let i = 0; i < arrLength; i++) {
        if(arr[i] == 0){
            arr.splice(i,1);
            zeroFind++;
        }
    }

    for (let j = 0; j < zeroFind; j++) {
        arr.push(0);
    }

    return arr;
}

function moveZero2(arr){
    let arrLength = arr.length - 1;
    let noZero = 0;

    for (let i = 0; i <= arrLength; i++) {
        if(arr[i] != 0){
            let temp = arr[noZero];
            arr[noZero] = arr[i];
            arr[i] = temp;
            noZero++;
        }
    }

    return arr;
}

console.log(moveZero2([1,2,4,9,0,6,0,3,0,1,67]));