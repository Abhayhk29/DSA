// reduce to zero 

function numOfStepToReduceZero(arr, count){
    if(arr == 0){
        return count;
    }

    count++;
    if(arr % 2 == 0){
        return numOfStepToReduceZero(arr / 2, count);
    }

    return numOfStepToReduceZero(arr - 1, count);
}

console.log(numOfStepToReduceZero(14,0));