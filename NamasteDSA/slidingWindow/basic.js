/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapObj = {};
    for(let i = 0; i < nums.length; i++){
        mapObj[nums[i]] = i
    }

    for(let j = 0; j < nums.length; j++){
        const sumLeft = target - nums[j];
        if(mapObj[sumLeft] && mapObj[sumLeft] != j){
            return [j, mapObj[sumLeft]]
        }
    }
};


// two sum leetcode 1
// s s(n)
// t O(n)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let right = 0;
    let left = numbers.length - 1;
    
    while(left > right){
        let addNum = numbers[left] + numbers[right]
        if(addNum === target){
            return [right + 1, left + 1]
        }
        if(addNum > target){
            left--;
        }else{
            right++
        }
    }
    
    return []
};


// leetcode 167
// s O(1)
// t o(n)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let l = 0;
    let r = 0;

    while(r < t.length){
        if(s[l] === t[r]){
            l++;
        }
        r++;
    }

    return l == s.length
};


// leetcode L= 392
// s : O(1)
// t O(n)


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for(let i = 0; i <= n - m; i++){
        let j = 0;
        for(j = 0; j < m; j++){
            if(haystack[i+j]!== needle[j]){
                break;
            }
        }
        if(j === m){
            return i
        }
    }
    return -1;
};



// leetcode  28
// time O(n*m)
// space O(1)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // let n = haystack.length;
    // let m = needle.length;

    // for(let i = 0; i <= n - m; i++){
    //     let j = 0;
    //     for(j = 0; j < m; j++){
    //         if(haystack[i+j]!== needle[j]){
    //             break;
    //         }
    //     }
    //     if(j === m){
    //         return i
    //     }
    // }
    // return -1;
    let n = haystack.length;
    let m = needle.length;

    let lps = [0];
    let i = 0;
    let j = 1;

    while(j < m){
        if(needle[i] === needle[j]){
            lps[j] = i+1;
            ++i;
            ++j
        }else{
            if(i == 0){
                lps[j] = 0;
                ++j;
            }else{
                i = lps[i - 1];
            }
        }
    }

    i = j = 0;

    while(i < n){
        if(haystack[i] === needle[j]){
            
            ++i;
            ++j;
        }else{
            if(j == 0){
                ++i
            }else{
                j = lps[j - 1];
            }
        }
        if(j == m){
            return i - m;
        }
    }
    return -1
};


// t O(n)
// s O(m)

