

function isArraySort(arr,s){
    if(s  == arr.length - 1){
        return true;
    }

    return arr[s] < arr[s + 1] && isArraySort(arr, s+=1);
}

console.log(isArraySort([1,2,9,4,5,6],0));