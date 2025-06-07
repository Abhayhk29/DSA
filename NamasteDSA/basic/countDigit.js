function countDigit(num){
    if(num == 0){
        return 1;
    }

    num = Math.abs(num);

    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }
    return count;
}

// math.floor : round below
console.log(countDigit(4232332323))
console.log(countDigit(-4232332323))
console.log(countDigit(0))

// Palidrome Number
function palidromeNumber(x){
    // if( num < 0 ) return false;
    // let rev = 0;
    // let orig = num;
    // while (num > 0) {
    //     let rem = num % 10;
    //     rev = (10 * rev) + rem;
    //     num = Math.floor(num / 10)
    // }
    // return orig == rev
    if(x < 0) return false;

    let orig = x;
    let rev = 0;

    while(x > 0){
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x =  Math.floor(x / 10);
    }

    return orig == rev;
}

// console.log(palidromeNumber(121))

function reverseNumber(num){
    let rev = 0;
    let xCopy = num;
    num = Math.abs(num);
    while (num > 0) {
        let last = num % 10;
        rev = (10 * rev) + last;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2,31);

    if(rev < -limit || rev > limit) return false;
    return xCopy < 0 ? -rev: rev;
}

console.log(reverseNumber(123))
console.log(reverseNumber(-123))