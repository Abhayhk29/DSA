function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target){
            return i;
        }        
    }

    return -1;
}

var search = function(nums, target) {
    let s = 0;
    let end = nums.length -1;

    while(s <= end){
        let m = Math.floor( (s + end) / 2);
        if(nums[m] == target){
            return m;
        } else if(nums[m] > target){
            end = m - 1;
        }else{
            s = m + 1;
        }
    }

    return -1;
};


function bubbleSort(arr){
    let n = arr.length;

    for (let i = 0; i <  n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true; 
            }
        }
        if(!isSwapped){
            break;
        }
    }

    return arr;
}
// time complexity : O(n^2)
// console.log(bubbleSort([5,2,4,1]))


// selection sort

function selectionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min  = i;
        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp
        }
    }
    return arr;
}
// O(N^2)
// O(1)
// console.log(selectionSort([2,4,67,6,8,1,9]))

function insertionSort(arr){
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        
        let curr = arr[i];
        let prev = i - 1;

        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
        
    }

    return arr;
}
// time O(n^2);
// O(1);
// console.log(insertionSort([3,1,5,7,2,4,89,56,11]))


function mergeSort(arr){
     if(arr.length <= 1) return arr;
     let mid = Math.floor(arr.length / 2);
     let left = mergeSort(arr.slice(0,mid));
     let right = mergeSort(arr.slice(mid));
     return merge(left, right);
}

function merge(rArr, lArr){
    let res = [];

    let i = 0;
    let j = 0;

    while (i < lArr.length && j < rArr.length) {
        if(lArr[i] < rArr[j]){
            res.push(lArr[i]);
            i++;
        }else{
            res.push(rArr[j]);
            j++;
        }
    }

    return [...res, ...lArr.slice(i), ...rArr.slice(j)]
}

console.log(mergeSort([3,1,5,7,2,4,89,56,11]))