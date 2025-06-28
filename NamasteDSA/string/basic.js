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

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // let b = s.replace(/[^A-Z0-9]+/ig,"");
    // b = b.toLowerCase();
    // const len = b.length;
    // for(let i = 0; i < len / 2; i++){
    //     if(b[i] !== b[len - 1 - i]){
    //         return false;
    //     }
    // }
    // return true;

    // s = s.toLowerCase()
    // let filterString = '';
    // let rev = ''
    // for(let i = 0; i < s.length; i++){
    //     if(s[i].match(/[a-z0-9]/i)){
    //         filterString += s[i];

    //         rev = s[i] + rev;
    //     }
    // }

    // let rev = filterString.split("").reverse().join("");
    // // t = O(n) 
    // // s : O(n)
    // return filterString === rev
    s = s.toLowerCase()
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if(!s[i].match(/[a-z0-9]/i)){
            ++i;
        } else if(!s[j].match(/[a-z0-9]/i)){
            --j
        } else if(s[i] === s[j]){
            ++i;
            --j;
        }else{
            return false
        } 
    }
    return true;
    // t : o(n) 
    // s : o(1)
    // leetcode : 125
};

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let len = num.length - 1;

    while(len >= 0){
        if(Number(num[len]) % 2 === 1){
            return num.substring(0, len + 1)
        }
        len--
    }

    return ''
};

//  s = O(1)
// t = O(n)
// leetocde 1903

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x = 0;
    while(x < strs[0].length){
        let ch = strs[0][x];
        for(let i = 1; i < strs.length; i++){
            if(ch != strs[i][x] || x == strs[i].length){
                return strs[0].substring(0,x);
            }
        }
        ++x;
    }
    return strs[0]
};

// s O(1)
// t O(n) leetcode : 14
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// if we sort an item in the not mutable we need to create the new string so new string we need to create so O(n) will be space

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if(s.length !== t.length){
    //     return false
    // }
    
    
    // let sortedS = s.split('').sort().join();
    // let sortedT = t.split('').sort().join();
    
    // return sortedS == sortedT;

    // let obj = {};

    //     if(s.length !== t.length) return false;

    //     for(let i = 0; i <= s.length; i++){
    //         if(obj[s[i]]){
    //             obj[s[i]] += 1
    //         }else{
    //             obj[s[i]] = 1;
    //         }
    //     }

    //     for(let j = 0; j <= t.length; j++){
    //         if(obj[t[j]]){
    //             obj[t[j]] -= 1;
    //         }

    //         if(obj[t[j]] === 0){
    //             delete obj[t[j]];
    //         }
    //     }

    //     return Object.keys(obj).length > 0 ? false : true;

    
    if(s.length != t.length) return false
    let obj = {};

    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] += 1
        }else{
            obj[s[i]] = 1;
        }
    }

    for(let i = 0; i < t.length; i++){
        if(!obj[t[i]] || obj[t[i]] < 0){
            return false;
        }else{

        --obj[t[i]]
        }
    }
    return true;
};

// t : O(n);
// S : O(1) because alpahabet will be of 26 only and it will be constant it will not increase it as the input increase
// leetcode 242
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;

    // let x = 0;
    // let obj = {};
    // let obj2 = {};

    // for(let i = 0; i < s.length; i++){

    // }
    // while(x < s.length){
    //     if(!obj[s[x]]){
    //         obj[s[x]] = t[x]
    //     }else if(obj[s[x]] && t[x] != obj[s[x]]){
    //         return false;
    //     }

    //     ++x;
    // }

    // return true;
    let mapStoT = {}
    let mapTtoS = {};

    for(let i = 0; i < s.length; i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if(mapStoT[s[i]] !== t[i]){
            return false;
        }else if(mapTtoS[t[i]] !== s[i]){
            return false;
        }
    }

    return true;
};

// t O(n) :
//  s O(1)
// 205. Isomorphic Strings

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // let obj = {};
    // debugger;
    // for(let word of strs){
    //     let alw = word.split('').sort().join('');
        
    //     if(obj[alw]){
    //         obj[alw].push(word);
    //     }else{
    //         obj[alw] = [word];
    //     }
        
    // }

    // for(let word of strs){
    //     let key = new Array(26).fill(0);
    //     for(let w of word){
    //         key[w.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    //     }

    //     key = key.join(',');

    //     if(!obj[key]){
    //         obj[key] = [];
    //     }

    //     obj[key].push(word);
    // }
    
    // return Object.values(obj);
    let obj = {};
    for(let i = 0; i < strs.length; i++){
        let alw = strs[i].split('').sort().join('');
        if(!obj[alw]){
            obj[alw] = [strs[i]];
        }else{
            obj[alw].push(strs[i]);
            
        }
    }
    console.log(obj)
    return [...Object.values(obj)]
    // t = n * m logn
    // s = N * m
};



