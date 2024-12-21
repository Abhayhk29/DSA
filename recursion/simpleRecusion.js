function printNum(n){
    if(n > 5){
        return;
    }
    console.log(n);
    printNum(n+1);
}

function fibNociRecur(n){
    if (n < 2){
        return n;
    }

    return fibNociRecur(n - 2) + fibNociRecur(n - 1);
}

function print1ton(n){
    if( n == 0){
        return;
    }

    console.log(n);
    print1ton(n - 1);
    console.log(n);
}
let sum  = 0
function reverseNumber(n){
    if(n  == 0){
        return n;
    }
    let rem = n % 10;
    sum = sum * 10 + rem;
    reverseNumber(Math.floor(n /10));
}

let totalNumberOfDigit = Math.floor(Math.log10(12321)) + 1;
function reverseNumber2(n,a){
    if(n %10  == n){
        return n;
    }
    let rem = n % 10;
    
    return rem * Math.pow(10, a - 1) + reverseNumber2(Math.floor(n /10), a - 1)
}

function palidrome(a){
    return a === reverseNumber2(a, totalNumberOfDigit);
}

// console.log(reverseNumber(12321));
// console.log(reverseNumber2(12321,totalNumberOfDigit));
// console.log(sum);
console.log(palidrome(12321));
