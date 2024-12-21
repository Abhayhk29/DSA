// input  : [1,4,3,-5,-4,8,6] output : min = -5 and max : 8

function getMaxAndMinInArray(arr){
    let min = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }

    return [min, max];
}

function findMinRec(A, n)
{
     
    // If size = 0 means whole
    // array has been traversed
    if (n == 1)
        return A[0];
         
    return Math.min(A[n - 1],
        findMinRec(A, n - 1));
}

function findMaxRec(A,n){

    if(n == 1){
        return A[0];
    }

    return Math.max(A[n - 1], findMaxRec(A, n - 1));

}

// console.log(getMaxAndMinInArray([1,4,3,-5,-4,8,6]));
console.log(findMaxRec([1, 4, 45, 6, 10, -8], [1, 4, 45, 6, 10, -8].length));