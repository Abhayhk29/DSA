// Given two arrays, find the intersection(items occur in both arrays)

// arrays are not sorted, and might have duplicates.
// you can modify the arrays
// you can return the items in any order, but without duplicates.
// This is an easy problem, What is the time & space complexity of your approach?
// [1,3,45,6,4,6,8] 
function getInterection(arr1, arr2){
    let newSet = new Set(arr1);
    let result = [];

    for (const val of arr2) {
        if(newSet.has(val)){
            result.push(val);
        }
    }
    return result;
}

console.log(getInterection([1,5,6,7,8,9],[21,3,4,5,6,76]));
