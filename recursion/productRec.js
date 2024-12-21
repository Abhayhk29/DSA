function sumOfDigits(n){
    if(n == 0){
        return 0;
    }

    return sumOfDigits(Math.floor(n / 10)) + n % 10;
}

function prodOfDigits(n){
    if(n % 10 == n){
        return n;
    }

    return   n % 10 * prodOfDigits(Math.floor(n / 10));
}

console.log(prodOfDigits(1234));