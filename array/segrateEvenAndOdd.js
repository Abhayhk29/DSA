// segrate even and odd as Even first in the array and odd in the last
// input = [1,9,5,3,2,6,7,1,1] output = [2,6,5,3,1,9,7,1,1]

function segrateEvenOdd(arr){
    let evenPos = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] % 2 == 0){
            let temp = arr[i];
            arr[i] = arr[evenPos];
            arr[evenPos] = temp;
            evenPos++
        }
    }

    return arr;
}

// let temp = arr[i];
// arr[i] = arr[i - 1];
// arr[i - 1] = temp; 
console.log(segrateEvenOdd([1,9,5,3,2,6,7,1,1]))
