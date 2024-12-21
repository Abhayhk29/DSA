// selection sory find the largest and swap to the last;

function selectionSortRecursion(arr,row,c,max){
    if(row == 0){
        return;
    }

    if(c < row){
        if(arr[c] > arr[max]){
            selectionSortRecursion(arr, row, c+1, c);    
        }else{
            selectionSortRecursion(arr, row, c+1, max);
        }
    }else{
        let temp = arr[max];
        arr[max] = arr[row - 1];
        arr[row - 1] = temp;
        selectionSortRecursion(arr, row-1,0,0); 
    }
}

let arr = [4,3,2,1];
console.log(selectionSortRecursion(arr, arr.length, 0, 0));
console.log(arr);