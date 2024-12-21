// array : wherter is sorted or not
// arr = [1,2,4,8,9,12]
function checkArraySorted(arr,i){
    if(arr.length - 1  === i){
        return true;
    }

    return arr[i] < arr[i+1] && checkArraySorted(arr, i+=1);
}


// console.log(checkArraySorted([1,2,3,4,5,22, 6,7],0));


function findElementInArray(arr,target, index){
    if(index == arr.length){
        return false;
    }

    return arr[index] == target || findElementInArray(arr, target, index += 1)
}

function findElementInArrayReturnIndex(arr,target, index){
    if(index == arr.length){
        return -1;
    }

    if(arr[index] == target){
        return index;
    }else{
        return findElementInArrayReturnIndex(arr, target, index += 1)
    }
}
let arrReturn = [];
function findElementInArrayAllValue(arr,target, index){
    if(index == arr.length){
        return;
    }
    if(arr[index] == target){
        arrReturn.push(index);
    }
    findElementInArrayAllValue(arr, target, index += 1)
}

function findElementInArrayAllValueArr(arr,target, index, arrList){
    if(index == arr.length){
        return arrList;
    }
    if(arr[index] == target){
        arrList.push(index);
    }
    return findElementInArrayAllValueArr(arr, target, index += 1,arrList)
}

function findElementInArrayAllValueArrListWithoutArgument(arr,target, index){
    let arrList = [];
    if(index == arr.length){
        return arrList;
    }
    if(arr[index] == target){
        // specific return in the loop
        arrList.push(index);
    }
    let newArr = findElementInArrayAllValueArrListWithoutArgument(arr, target, index += 1)

    return [...arrList, ...newArr];
}


function searchInRotatedArray(arr, target, start, end){
    if(start > end){
        return -1;
    }

    let mid = Math.floor((start + (end - start) / 2));

    if(arr[mid] === target){
        return mid;
    }

    if(arr[start] <= arr[mid]){
        if(target >= arr[start] && target <= arr[mid]){
            return searchInRotatedArray(arr,target, start, mid -1);
        }else{
            return searchInRotatedArray(arr,target, mid + 1, end);
        }
    }

    if(target >= arr[mid] && target <= arr[end]){
        return searchInRotatedArray(arr,target, mid + 1, end);
    }

    return searchInRotatedArray(arr,target, start, mid -1);

}

console.log(searchInRotatedArray([5,6,7,8,9,1,2,3], 18, 0, [5,6,7,8,9,1,2,3].length - 1));




console.log(findElementInArrayAllValueArrListWithoutArgument([1,4,5,9,6,7,8,9,12,9,34,20,23],9, 0));
// console.log(arrReturn);