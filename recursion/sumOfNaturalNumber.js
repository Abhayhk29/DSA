// sum of natural number : 6 : 6 + 5 + 4 + 3 + 2 + 1 = 21

function sumOfNaturalNumber(number){
    if(number <= 1){
        return 1;
    }

    return number + sumOfNaturalNumber(number - 1);
}

console.log(sumOfNaturalNumber(6));