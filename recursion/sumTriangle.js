function sumTriangle(arr, n){
    if(n < 1){
        return;
    }

    let temp = new Array(n - 1);
    for (let i = 0; i < n - 1 ; i++) {
        temp[i] = arr[i] + arr[i + 1];
    }

    sumTriangle(temp, n - 1);
    console.log(arr);
}

let arr = [1,2,3,4,5];

console.log(sumTriangle(arr, arr.length));