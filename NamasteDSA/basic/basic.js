/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  if(s.length < 2){
    return -1;
  }

  let largest = {
    first : Number.NEGATIVE_INFINITY,
    second: Number.NEGATIVE_INFINITY
  }  
    let regx = /^\d+$/;
  for(let i of s){
    if(regx.test(i)){
        let num = Number(i)
        if(num > largest.first){
            largest.second = largest.first;
            largest.first = num;
        }else if(num > largest.second && num !== largest.first){
              let temp = largest.second;
              largest.second = num
        }
    }
  }

  return largest.second !== Number.NEGATIVE_INFINITY ? largest.second : -1;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if( x < 0) return false;

    let reversed = 0;
    let original = x;


    while(x > 0){
        let lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }


    return reversed === original;
};