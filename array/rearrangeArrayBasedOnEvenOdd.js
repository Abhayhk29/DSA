// rearrange array such that even position are greater than odd
function arrangeArray(arr){
    let len = arr.length;
    for (let i = 1; i < len; i++) {
       if(i  % 2 == 0){
            if(arr[i] > arr[i - 1]){
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;   
            }
       } else {
        if(arr[i] < arr[i - 1]){
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp; 
        }
       }
    }

    return arr;
}

console.log(arrangeArray([1,2,2,1]));
console.log(arrangeArray([1, 3, 2, 2, 5]));