/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if(x < 2) return x;
    let start = 2;
    let end = Math.floor(x /2);

    while(start <= end){
        // let m = Math.floor((start + end) / 2);
        // better way
        let m = start + Math.floor((end - start) / 2);

        if( x === m**2){
            return m;
        } else if (x < m**2){
            end = m - 1;
        }else{
            start = m + 1;
        }
    }

    return end
};

// time O(logn)
// space 1
// 69 Leetcoe

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    let end = n;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);
        let res = guess(mid);
        if(res === 0){
            return mid;
        } else if(res < 0){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return -1
};

// 374 leetcode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if(nums[mid] == target){
            return mid;
        }
        if(nums[start] <= nums[mid]){
            if(target < nums[mid] && target >= nums[start]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        // }else if(nums[start] > nums[mid]){
        //     if(target > nums[mid] && target <= nums[end]){
        //         start = mid + 1;
        //     }else{
        //         end = mid - 1;
        //     }
        // }
        }else {
            if(target > nums[mid] && target <= nums[end]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
        // if(nums[start] > nums[end]){
        //     start++;
        // }else{
        //     end--
        // }
    }

    return -1;
};

// 33 leetcode