// odd or even
// Calculated in the Binary
function getOddOrEven(number){
    return (number & 1) == 1;
}

// every number appearing twice except 1 found that
function findAppearingNumber(arr){
// xor the array
    let unique = 0;

    for (const iterator of arr) {
        // console.log(iterator)
        unique ^= iterator;
    }

    return unique;

}

// console.log(getOddOrEven(68));
console.log(findAppearingNumber([2,3,3,4,2,6,4]));