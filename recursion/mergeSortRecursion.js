// merge sort


function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let right = mergeSort(arr.slice(0,mid));
    let left = mergeSort(arr.slice(mid, arr.length));

    return merger(left,right);

}

function merger(leftArr, rightArr){
    let ans = new Array(leftArr.length + rightArr.length);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            ans[k] = leftArr[i];
            i++;
        }else{
            ans[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < leftArr.length) {
        ans[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArr.length) {
        ans[k] = rightArr[j];
        j++;
        k++;
    }

    return ans;
}

function mergeSortWithParameter(arr, start, end){
    if(end - start == 1){
        return;
    }

    let mid = Math.floor((start + end) / 2);

    mergeSortWithParameter(arr, start, mid);
    mergeSortWithParameter(arr, mid, end);

    mergerWithParameter(arr, start, mid, end);

}

function mergerWithParameter(arr, start, mid, end){
    let ans = new Array(end - start);

    let i = start;
    let j = mid;
    let k = 0;

    while(i < mid && j < end){
        if(arr[i] < arr[j]){
            ans[k] = arr[i];
            i++;
        }else{
            ans[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i < mid) {
        ans[k] = arr[i];
        i++;
        k++;
    }

    while (j < end) {
        ans[k] = arr[j];
        j++;
        k++;
    }

    for (let l = 0; l < ans.length; l++) {
        arr[start+l] = ans[l]
    } 
}


let arr = [34,33,24,123,45,23,5465,234];
console.log(mergeSort(arr));
// console.log(arr);

console.log(mergeSortWithParameter(arr, 0, arr.length));
console.log(arr);