// recursion bubble sort
function bubbleSort(arr, row,c){
    if(row == 0){
        return;
    }

    if(c < row){
        if(arr[c] > arr[c + 1]){
            let temp = arr[c];
            arr[c] = arr[c + 1];
            arr[c+1] = temp;
        }
        bubbleSort(arr, row, c+1);
        
    }else{
        bubbleSort(arr, row-1,0); 
    }
}

function bubbleSortSec(arr, n){
    if(n == 1){
        return;
    }

    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]){
            // swap the number
            let temp = arr[i];
            arr[i] = arr[i+ 1];
            arr[i+1] = temp;
            count++;

        }

    }

    if(count == 0){
        return;
    }

    bubbleSortSec(arr, n - 1);
}

let arr = [4,3,2,1];
console.log(bubbleSortSec(arr, arr.length));
console.log(arr);