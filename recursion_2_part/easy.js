function printWithRecursion(n){
    if(n === 0){
        return;
    }

    printWithRecursion(n - 1)
    // console.log(n);
}


// printWithRecursion(10);

function printNRecursion(n){
    if(n <= 1){
        return 1;
    }
    // debugger;
    return n * printNRecursion(n - 1);
}

// console.log(printNRecursion(5));

// sum of 1 to n;

function sumOfn(n){
    if(n <= 1){
        return 1;
    }

    return n + sumOfn(n - 1);
}

// console.log(sumOfn(5));


// sum of entire Digit

function sumOfDigit(n){
    if(n == 0){
        return 0;
    }
    
    return (n % 10) + sumOfDigit(Math.floor(n / 10));
}
// console.log(sumOfDigit(54321));

function sumOfMultiply(n){
    if(n% 10 == n){
        return n;
    }
    
    return (n % 10) * sumOfMultiply(Math.floor(n / 10));
}
// console.log(sumOfMultiply(205));

// concept to pass number

// reverse number
let sum = 0;
function reverseNumberRecu(n){
    if(n === 0){
        return;
    }
    let rem = n % 10;
    sum = sum * 10 + rem;
    reverseNumberRecu(Math.floor(n / 10));
    return sum;
}

// console.log(reverseNumberRecu(5689))
function reverseNumberRecu2(n, nu){
    // some addition variable in that case create extra variable
    if(n % 10 === n){
        return n;
    }

    return  (n % 10) * Math.pow(10,nu - 1) + reverseNumberRecu2(Math.floor(n / 10), nu - 1);
}

// console.log(reverseNumberRecu2(5689, Math.floor(Math.log10(5689) + 1)))
// reverseNumberRecu(sum)

// palidrome
function palidrome(n, nu){
    // some addition variable in that case create extra variable
    if(n % 10 === n){
        return n;
    }

    return  (n % 10) * Math.pow(10,nu - 1) + reverseNumberRecu2(Math.floor(n / 10), nu - 1);
}

// let num = 1111;
let num = 1234321;
// console.log(num === palidrome(num, Math.floor(Math.log10(num) + 1)))


// count number of zeroes in the number;
function calculateZero(n ,count){
    if(n ===  0){
        return count;
    }

    let rem = n % 10;

    if(rem == 0){
        return calculateZero(Math.floor(n / 10), count+=1)
    }

    return calculateZero(Math.floor(n / 10), count)
}

// leetcode 1342 count number of steps to reduce the number to zero
function numberReduceToZero(n,countToMakeZero){
    if(n === 0){
        return countToMakeZero;
    }

    // if num is remender after divide by 2
    if(n % 2 === 0){
        return numberReduceToZero( n / 2, countToMakeZero+=1);
    }

    return numberReduceToZero( n  - 1, countToMakeZero+=1);

}

console.log(numberReduceToZero(41,0));



// console.log(calculateZero(12098060709, 0));