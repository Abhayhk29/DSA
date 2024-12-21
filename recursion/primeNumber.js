// prime number

function isPrime(n,i){
    if(n <= 2){
        return (n == 2) ? true : false;
    }

    if(n % i == 0){
        return false;
    } else if(i*i > n ){
        return true;
    }

    return isPrime(n , i + 1);
}

console.log(isPrime(13,2));