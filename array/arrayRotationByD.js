// lets rotate the array by the d method
// exapmple : Input : = [1,2,3,4,5,6,7] d = 2 OutPut : [3, 4, 5, 6, 7, 1, 2]

function rotateByD(arr,d){
    if (d > arr.length){
        return 'Out of Bound';
    }

    for (let i = 0; i < d; i++) {
        let d = arr.shift();
        arr.push(d);
    }

    return arr;
}

console.log(rotateByD([ 1, 2, 3, 4, 5, 6, 7],2));