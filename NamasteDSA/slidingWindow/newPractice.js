// https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        // code here
        let sum = 0;
        let max = 0;
        for(let j = 0; j < k; j++){
            sum += arr[j];
        }
        
        max = Math.max(sum, max);
        
        for(let i = k; i < arr.length; i++){
            sum += arr[i];
            sum = sum - arr[i - k]
            max = Math.max(sum, max);
        }
        
        return max;
    }
}

function maxSubArrayBrute(arr,k){
   let max = -Infinity;
   
   for(let i = 0; i <= arr.length - k; i++){
       let sum = 0;
        for(let j = i; j < i + k ; j++){
            sum += arr[j];
        }

        max = Math.max(sum,max);
   }

   return max;

}


let inputMaxrr = [100,200,400,800,900,1200]

console.log(maxSubArrayBrute(inputMaxrr,2))


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let sum = 0;
    let max = 0;

    for(let i = 0; i <= nums.length - k; i++){
        let newSet = new Set();
        let isDuplicate = false;

        for(let j = i; j <= i + k - 1; j++){
            if(newSet.has(nums[j])){
                isDuplicate = true;
                break;
            }

            newSet.add(nums[j])
            sum += nums[j];
        }

        if(!isDuplicate){
            max = Math.max(sum,max);
            // isDuplicate = false;
        }
        sum = 0;
    }

    return max;
};


// with sliding window approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let newMap = new Map();
    let dupCount = 0;
    let max = 0
    let sum = 0;

    for(let i = 0; i < k; i++ ){
        if(!newMap.has(nums[i])){
            newMap.set(nums[i], 0);
        }

        newMap.set(nums[i], newMap.get(nums[i]) + 1)

        sum += nums[i];
        if(newMap.get(nums[i]) > 1){
            dupCount +=1;
        }
    }

    if(dupCount === 0){
        max = Math.max(max,sum);
    }

    for(let i = k; i < nums.length; i++){
        let numToAdd = nums[i];
        let numToRemove = nums[i - k];

        if(!newMap.has(numToAdd)){
            newMap.set(numToAdd, 0);
        }

        newMap.set(numToAdd, newMap.get(numToAdd) + 1)

         if(newMap.get(numToAdd) > 1){
            dupCount +=1;
        }

        sum += numToAdd;

        if(newMap.get(numToRemove) > 1){
            dupCount -= 1;
        }

        newMap.set(numToRemove, newMap.get(numToRemove) - 1);

        sum = sum - numToRemove;

        if(dupCount === 0){
            max = Math.max(max,sum);
        }

    }

   return max;

};

// https://leetcode.com/problems/minimum-size-subarray-sum/
// 209

// time : O(n^2)
// O (1)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let size = Infinity;


    for(let i = 0; i < nums.length ; i++){
        let sum = 0;
        for(j  = i ; j < nums.length; j++){
            sum += nums[j];

            if(sum >= target){
                size = Math.min(size,j - i + 1);
                break;
            }
        }
    }

    return size === Infinity ? 0 : size;
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//  time : O(n)
// O (1)

var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let size = Infinity;

    let i = 0;
    let j = 0;
    while(j < nums.length){
        sum += nums[j];

        while(sum >= target){
            size = Math.min(size, j - i + 1);
            sum -= nums[i]
            i += 1;
        }

        j += 1;
    }

    return size === Infinity ? 0 : size;
};


// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// time = 0(n^2)
// s : o(n)

var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        let mySet = new Set();
        for(let j = i; j <= Math.min(i + k, nums.length - 1); j++){
            if(mySet.has(nums[j])){
                return true;
            }

            mySet.add(nums[j]);
        }
    }

    return false;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// time = o(n)
// s : O(n)
var containsNearbyDuplicate = function(nums, k) {

    
    let mySet = new Set();
    for(let i = 0; i < Math.min(k,nums.length); i++){
        if(mySet.has(nums[i])){
            return true;
        }

        mySet.add(nums[i]);
    }

    for(let j = k; j < nums.length; j++){
        if(mySet.has(nums[j])){
            return true;
        }
        mySet.add(nums[j]);
        mySet.delete(nums[j - k])

    }


    return false;
};


// https://leetcode.com/problems/maximum-average-subarray-i/submissions/1872999172/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// t : o(n)
// s : o(1)
var findMaxAverage = function(nums, k) {
      let max = 0;
    let avg = -Infinity;
    for(let i = 0; i <= Math.min(k - 1, nums.length); i++){
        max += nums[i];
    }
    avg = Math.max(max / k, avg)
    for(let j = k; j < nums.length; j++){
        max = max - nums[j - k];
        max += nums[j]
        avg = Math.max(max / k, avg)        
    }


    return avg;
};


/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// t : O(n^2)
// s : O(n)
var lengthOfLongestSubstring = function(s) {
    let max = 0;

    for(let i = 0; i < s.length; i++){
        let mySet = new Set();
        for(let j = i; j < s.length; j++){
            if(mySet.has(s[j])){
                break;
            }

            mySet.add(s[j]);
            max = Math.max(max, j - i + 1);
        }
    }

    return max
};


/**
 * @param {string} s
 * @return {number}
 */

// t : o(n)
// s : o(n)
var lengthOfLongestSubstring = function(s) {
    let max = 0;

    let i =0;
    let j = 0;
      let mySet = new Set();


    while(j < s.length){
        while(mySet.has(s[j])){
            mySet.delete(s[i]);
            i = i + 1;
        }

        mySet.add(s[j]);
        max = Math.max(max,j - i + 1);
        j = j + 1;
    }
    return max
};


/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */

// t : O(n - d)d
// s : O(n - d)d
var findRepeatedDnaSequences = function(s) {
    
    let mySet = new Set(); 
    let myResultSet = new Set(); 
    let str = '';



    for(let i = 0; i <= s.length - 10; i++){
        let mySeq = s.substr(i, 10)
        if(mySet.has(mySeq)){
            myResultSet.add(mySeq);
        }

         mySet.add(mySeq)
    }
     console.log(myResultSet)
    return [...myResultSet]
};

// rabin karp and rolling hash

var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) return [];

    const L = 10;
    const base = 4;
    // Math.pow(4, 9) is the weight of the leftmost digit in a 10-char sequence
    const hiWeight = Math.pow(base, L - 1); 
    
    const charMap = { 'A': 0, 'C': 1, 'G': 2, 'T': 3 };
    const nums = Array.from(s).map(c => charMap[c]);

    let seenHashes = new Set();
    let result = new Set();
    let rollingHash = 0;

    // 1. Calculate hash for the first window
    for (let i = 0; i < L; i++) {
        rollingHash = rollingHash * base + nums[i];
    }
    seenHashes.add(rollingHash);

    // 2. Rolling Hash for the rest of the string
    for (let i = 1; i <= s.length - L; i++) {
        // Remove leftmost char, shift left, add rightmost char
        const prevCharVal = nums[i - 1];
        const nextCharVal = nums[i + L - 1];
        
        rollingHash = (rollingHash - prevCharVal * hiWeight) * base + nextCharVal;

        if (seenHashes.has(rollingHash)) {
            result.add(s.substring(i, i + L));
        } else {
            seenHashes.add(rollingHash);
        }
    }

    return [...result];
};
