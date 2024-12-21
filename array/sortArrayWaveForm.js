// form like up -down likes waves
// input : [10, 5, 6, 3, 2, 20, 100, 80] outPut : [10, 5, 6, 2, 20, 3, 100, 80]

function waveLikeSort(arr){
    arr.sort((a,b) => a - b);

    for (let i = 0; i < arr.length - 1; i+=2) {
        let temp = arr[i + 1];
        arr[i+1] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function waveLikeSort2(arr){

    for (let i = 0; i < arr.length; i+= 2) {
        if(i > 0 && arr[i] < arr[i - 1]){
            swap(arr, i- 1, i);
        }

        if(i < arr.length - 1 && arr[i] < arr[i+1] ){
            swap(arr,i, i+1);
        }
        
    }

    return arr;
}

console.log(waveLikeSort([10, 5, 6, 3, 2, 20, 100, 80]));
console.log(waveLikeSort([10, 90, 49, 2, 1, 5, 23]));
console.log(waveLikeSort2([10, 5, 6, 3, 2, 20, 100, 80]));
console.log(waveLikeSort2([10, 90, 49, 2, 1, 5, 23]));