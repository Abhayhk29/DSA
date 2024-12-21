// search in rotated array
function searchInRotatedArray(arr, target, start, end){
    if(start > end){
        return -1;
    }

    let mid = start + Math.floor((end - start) / 2);

    if( arr[mid] == target){
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

let arr = [5,6,7,8,9,1,2,3];
console.log(searchInRotatedArray(arr, 3, 0, arr.length - 1 ));