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
