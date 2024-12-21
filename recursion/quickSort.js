// how to take pivot element : we can take any number 
// random element
// corner element
// Mid element

function quickSort(arr, low, high){
    if(low >= high){
        return;
    }

    let s = low;
    let e = high;

    let m = Math.floor(s + (e - s) / 2);
    let pivot = arr[m];

    while(s <= e){

        // also a reason why if its already sorted it will not swap
        while(arr[s] < pivot){
            s++;
        }

        while(arr[e]> pivot){
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

    // now my pivot is at correct index sort those two array
    quickSort(arr,low, e);
    quickSort(arr,s, high);
}

let arr = [1,5,8,3,86,2,43];
console.log(quickSort(arr,0,arr.length - 1));
console.log(arr);