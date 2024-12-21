function numberOfStepsToZero(num , steps){
    if(num == 0){
        return steps;
    }

    if( num % 2 == 0){
        return numberOfStepsToZero( Math.floor(num / 2), steps += 1);
    }

    return numberOfStepsToZero( num - 1, steps += 1);
}

console.log(numberOfStepsToZero(41,0));