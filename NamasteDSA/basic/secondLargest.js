function secondLargest(arr){
    if(arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] !== first){
            second = arr[i]
        }
    }

    return second === Number.NEGATIVE_INFINITY ? "No Second Largest" : second; 

}

console.log(secondLargest([0,4,6,34,676,32,56,77]))

// loop in a loop

// for (let i = 0; i < 3; i++) {
//     for (let j = i; j >= 0; j--) {
//         console.log(`i : ${i} , j = ${j}`)
//     }
    
// }

for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
                console.log(`i : ${i} , j = ${j}`)
    }
    
}