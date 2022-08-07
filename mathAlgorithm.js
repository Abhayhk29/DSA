// Fibonacci Sequence Series
// O(n) Big O
function fibnoacci(n){
    const fib = [0,1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib [i -2];        
    }

    return fib;
}

// big = O(n)
function factorialNumber(n){
    
    let result = 1;
    for (let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}

// Big O = O(n)
function isPrimeNumber(n){
    if(n < 2) return false;

    for (let i = 2; i < n; i++) {
        if( n % i == 0){
            return false;
        }
        
    }

    return true;
}


// O(n)
function isPrimeNumber2(n){
    if(n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if( n % i == 0){
            return false;
        }
        
    }

    return true;
}

// power of 2
//Big O = O(log(n))
function powerOf2(n){
    if(n < 1) return false;

    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n /2;
    }

    return true;
}

// BigO : O(1)
function isPowerOfTwoBitWise(n){
    if(n < 1){
        return false;
    }
    return (n & ( n - 1)) === 0;

}


// Recursion for Example Fibnoccie
// O(n^2) (Big O)
function fibnoacciRec(n){
    if(n < 2){
        return n;
    }        

    return fibnoacciRec(n - 1) + fibnoacciRec( n - 2);
}

// faactorial of a number
// Big O = O(n)
function reFact(n){
    if(n < 2){
        return n;
    }

    return n * reFact(n - 1);
}



 

console.log(reFact(5));