/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    if(s.length === 0) return 0;

    let n = s.length - 1;

    while(n>= 0){
        if(s[n] === ' '){
            n--;
        }else{
            break
        }
    }

    let count = 0;

    while(n>= 0){
        if(s[n] != ' '){
            n--;
            count++;
        }else{
            break;
        }
    }

    return count;
};

// t : O(n)
// s : O(1)

function lengthOfLastWord1(s){
    let n = s.length - 1;
    let count = 0
 
     while(n>= 0){
         if(s[n] === ' '){
             if(count > 0){
                 break;
             }
         }else{
             count++;
            }
            n--;
     }
     return count;
}

// t : O(n)
// s : O(1)
// \

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    for(let i = 0; i < words.length; i++){
        // if(words[i].includes(x)){
        //     result.push(i)
        // }
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] === x){
                result.push(i);
                break;
            }
        }
    }

    return result;
};


// t = O(m * n)
// O(1)

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jwelMap = new Set();
    let result = 0;
    for(let i = 0; i < jewels.length; i++){
        jwelMap.add(jewels[i]);
    }

    for(let i = 0; i < stones.length; i++){
        if(jwelMap.has(stones[i])){
            result++;
        }
    }


    return result;

    // we can use the includes or one extra loop
};

// T: O(N)
// s: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let mapObj = {};
    for(let i = 0; i < s.length; i++){
        if(mapObj[s[i]]){
            mapObj[s[i]] += 1
        }else{
            mapObj[s[i]] = 1;
        }
    }

    let maxVowel = 0;
    let maxConstant = 0;

    let vo = new Set('aeiou');
    for(let ob in mapObj){
        if(vo.has(ob)){
            maxVowel = Math.max(parseInt(mapObj[ob]), maxVowel)
        }else{
            maxConstant = Math.max( maxConstant, parseInt(mapObj[ob]));
        }
        
    }
 
    return maxVowel + maxConstant
};

// O(n)  O(1)'

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R = 0;
    let L = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R'){
            R++;
        }else if(s[i] === 'L'){
            L++;
        }

        if(R === L){
            count++;
            R = 0;
            L = 0;
        }
    }
    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    // let R = 0;
    // let L = 0;
    // let count = 0;
    // for(let i = 0; i < s.length; i++){
    //     if(s[i] === 'R'){
    //         R++;
    //     }else if(s[i] === 'L'){
    //         L++;
    //     }

    //     if(R === L){
    //         count++;
    //         R = 0;
    //         L = 0;
    //     }
    // }
    // return count;

    let temp = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R'){
            temp++;
        }else if(s[i] === 'L'){
            temp--;
        }
        if(temp === 0){
            count++;
        }
    }
    return count;
};

// leetcode : 1221
// t O(n)
// s S(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split('')
    for(let x = 0; x < s.length; x = x + (2 * k) ){
        let n = k;
        let mid = Math.floor(n/2);
        for(let i = 0; i < mid; i++){
            let temp = s[x + i];
            s[x + i] = s[x + n - 1 - i];
            s[x + n - 1 - i] = temp;
        }
    }
    
    return s.join('')
};

// leetcode : 541
// s = O(n)
// if not converting to array
// t = O(n)