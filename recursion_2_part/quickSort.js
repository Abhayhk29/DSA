// o(n^2)
// tim sort + insertion sort

function quickSort(arr, low, high){
    if(low >= high){
        return;
    }

    let s = low;
    let e = high;
    let m = s + Math.floor((e - s) / 2);
    let pivot = arr[m];

    while (s <= e) {
        // also a reason why if its already sorted we do not need to swap
        while(arr[s] < pivot){
            s++;
        }

        while(arr[e] > pivot){
            e--;
        }

        if(s <= e){
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;

            s++;
            e--;
        }
    }

    // aftet the pivot is at correct sort all the 2 part available
    quickSort(arr,low,e);
    quickSort(arr,s,high);
}

let ar = [5,6,23,2,1,67,78];

quickSort(ar,0, ar.length - 1);
console.log(ar);