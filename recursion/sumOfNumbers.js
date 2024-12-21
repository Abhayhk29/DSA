// sum of numbers : Input : 12345 Output: 15

function sumOfArray(num){
    if(num == 0){
        return 0;
    }

    return (num % 10 + sumOfArray(parseInt(num /10)));
}


console.log(sumOfArray(12345));
console.log(sumOfArray(123456789));