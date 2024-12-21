function printStar(r,c){
    if(r === 0){
        return;
    }

    if(c<r){
        console.log("*");
        printStar(r , c + 1);
    } else{

        console.log("");
        printStar(r - 1 , 0);
    }
}

function printStarOp(r,c){
    if(r === 0){
        return;
    }

    if(c < r){
        printStarOp(r , c += 1);
        console.log("*");
    } else{
        printStarOp(r-=1 , 0);
        console.log("");
    }
}

function bubbleSort(arr, r,c){
    if(r === 0){
        return;
    }

    if(c < r){
        if(arr[c] > arr[c+1]){
            let temp = arr[c];
            arr[c] = arr[c+1];
            arr[c+1] = temp;
        }
        bubbleSort(arr,r , c += 1);
    } else{
        bubbleSort(arr, r-=1 , 0);
    }
}
// let aarr= [5,7,8,3,5,1,17,9]
// bubbleSort(aarr,aarr.length - 1, 0);
// console.log(aarr);

function selectionSort(arr,r, c, max){
    if(r === 0){
        return;
    }
    
    if(c < r){
        if(arr[c] > arr[max]){
            selectionSort(arr, r , c + 1, c);
        }else{
            selectionSort(arr, r , c + 1, max);
        }
    } else{
        let temp = arr[max];
        arr[max] = arr[r - 1];
        arr[r - 1] = temp;
        selectionSort(arr, r - 1 ,0 ,0);
    }
}
let aarr1= [5,7,8,3,5,1,17,9]
selectionSort(aarr1,aarr1.length - 1, 0,0);
console.log(aarr1);