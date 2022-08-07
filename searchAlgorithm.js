// linear search
// Big O = O(n)
function linearSearch(arr,n){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == n){
        return true;
    }   
  }  

  return false;
}

// sorted array
// Big O = O(log(n))
function binarySearch(arr,n){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == n){
            return mid;
        }

        if(arr[mid] > n){
            end = mid -1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

// Big O = O(log(n))
function reBinarySolution(arr,n,start, end){
   if(start > end){
     return -1;
   }
   
   let mid = Math.floor((start + end) / 2);

   if(arr[mid] == n){
     return mid;
   }

   if(arr[mid] > n){
    reBinarySolution(arr,n, start, mid - 1);
    } else {
        reBinarySolution(arr,n, mid + 1, end);
    }

}

console.log(binarySearch([3,5,6,7,8,9,12,22,34,45],24, 0 , [3,5,6,7,8,9,12,22,34,45].length - 1 ))