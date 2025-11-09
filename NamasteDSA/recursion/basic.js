function sumOfNum(x){
    if(x == 0) return 0;
    return x + sumOfNum(x - 1);
}

console.log(sumOfNum(5))


function printN(num){
    if(num < 1) return;
    console.log(num);
    num -= 1;
    printN(num);
}


function printReverse(num){
    if(num < 1) return;
    num -= 1;
    printReverse(num);
    console.log(num) 
}

// printReverse(5);

function sumOfElementInArray(arr, len){
    if(len == 0) return arr[0];

    return arr[len] + sumOfElementInArray(arr, len - 1)
}

function sumOfElementInArrayOdd(arr, len){
    let isOdd = arr[len] % 2 != 0;
    if(len == 0) {
        if(isOdd) return arr[len]
        return 0;
    }
    if(isOdd){
        return arr[len] + sumOfElementInArrayOdd(arr, len - 1)
    }else{
        return 0 + sumOfElementInArrayOdd(arr, len - 1)
    }
}

function fact(n){
    if(n == 1) return 1;

    return n * fact(n - 1);
}

let arr = [5,4,6,3,7,8,3,8,7];
console.log(sumOfElementInArray(arr, arr.length - 1))
console.log(sumOfElementInArrayOdd(arr, arr.length - 1))
console.log(fact(5))

// 279 perfect square
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let solve = (rem) => {
        if(rem === 0){
            return 0;
        }

        let ans = rem;
        for(let i = 1; i*i <= rem ; i++){
            let temp = i*i;
            ans = Math.min(ans, 1 + solve(rem - temp));
        }
        return ans;
    }

    return solve(n);
};