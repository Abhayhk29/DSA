// bubble Sort 

function bubbleSort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            const element = arr[j];
            if(element > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}

// Big O =  O(n^2)

function bubbleSort2(arr){
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

    } while(swapped);
    return arr;
}


// assume first is sorted 
// BIG O = O(n^2);
function insertionSort(arr){
    let key;

    for (let i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j]> key) {
        arr[j+1] = arr[j];
        j = j - 1;
      }
      arr[j+1] = key;
        
    }

    return arr;
}

// we need to take the pivot point
// left : all small : right : which all are greater
// Worst : O(n^2)
// Average : O(nlogn)
function quickSort(arr){

    if(arr.length < 2){
        return arr;
    }
  let pivot = arr[arr.length - 1];
    let right = [];
    let left = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return[ ...quickSort(left), pivot, ...quickSort(right)];

}


// merger sort
// sub array : sort and merge
// O(nlog(n))
function mergerSort(arr){
  if(arr.length < 2){
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0,mid);
  const rightArr = arr.slice(mid);

  return merge(mergerSort(leftArr), mergerSort(rightArr));
}


function merge(leftArr, rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length ){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}


// BIG O : O(mn);
function cartPro(arr1, arr2){
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }

    return result;
}

// O(n)
function climbingStairCase(n){
    let climbingState= [1,2];

    for (let i = 2; i <= n; i++) {
        climbingState[i] = climbingState[i -1] + climbingState[i-2];
        
    }
    return climbingState[n-1];
}

// tower of Haanoi
// O(2^n)
function towerOFHanoi(n, fromRod, toRod, usingRod){
  if(n === 1){
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return;
  }
  towerOFHanoi (n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOFHanoi( n -1, usingRod,toRod,fromRod);

}




// console.log(cartPro([1,2],[3,4,5]));
console.log(towerOFHanoi(5,'A', "C", 'B'));