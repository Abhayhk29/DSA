// insertion sort using simple method
function insertionSort(arr,n){
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

function recursiveInsertionSort(arr,n){
    if(n <= 1){
        return;
    }

    recursiveInsertionSort(arr, n - 1);
    let last = arr[n - 1];
    let j = n - 2;

    while(j >= 0 && arr[j] > last){
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = last;
}

let arr = [12,11,13,5,6];
recursiveInsertionSort(arr, arr.length);
console.log(arr);