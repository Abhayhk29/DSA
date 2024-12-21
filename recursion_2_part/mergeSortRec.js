function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }

    let mid = Math.floor((arr.length / 2));

    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left,right);

}


function merge(first, second){
    let i = 0;
    let j = 0;
    let k = 0;
    let newArr = [];

    while(i < first.length && j < second.length){
        if(first[i] < second[j]){
            newArr[k] = first[i];
            i++;
        }else{
            newArr[k] = second[j];
            j++;
        }
        k++;
    }

    while(i < first.length){
        newArr[k] = first[i];
        i++;
        k++;
    }
    while(j < second.length){
        newArr[k] = second[j];
        j++;
        k++;
    }

    return newArr;

}

// console.log(mergeSort([5,4,3,2,1]));

// at every N elemets are merged
// n*log(n)

function mergeSortSe(arr, start, end){
    if(end - start == 1){
        return;
    }

    let mid = Math.floor((start + end) / 2);

    mergeSortSe(arr, start, mid);
    mergeSortSe(arr, mid, end);

    mergeSe(arr, start, mid, end);

}


function mergeSe(arr, start, mid, end){
    let i = start;
    let j = mid;
    let k = 0;
    let newArr = [];

    while(i < mid && j < end){
        if(arr[i] < arr[j]){
            newArr[k] = arr[i];
            i++;
        }else{
            newArr[k] = arr[j];
            j++;
        }
        k++;
    }

    while(i < mid){
        newArr[k] = arr[i];
        i++;
        k++;
    }
    while(j < end){
        newArr[k] = arr[j];
        j++;
        k++;
    }

    for (let i = 0; i < newArr.length; i++) {
        arr[start + i] =newArr[i]
    }
}

let arr = [5,4,3,2,1]
mergeSortSe(arr, 0, arr.length);
console.log(arr);