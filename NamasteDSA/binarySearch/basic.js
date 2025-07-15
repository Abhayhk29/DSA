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

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end){
        let mid = start + Math.floor((end - start) / 2);
        if(nums[mid] < nums[mid + 1]){
            start = mid + 1;
        }else{
            end = mid;
        }
    }

    return start;
};

// 162 leetcode


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s = 0;
    let e = nums.length - 1;
    // if(nums[s] <= nums[e]) return nums[s]
    while(s <= e){
        let m = s + Math.floor((e - s) / 2);
        if(nums[s] <= nums[e]) return nums[s]

        if(nums[m] < nums[m - 1]){
            return nums[m];
        } else if(nums[m] < nums[s]){
            e = m - 1;
        }else{
            s = m + 1;
        }
    }
};

// 153 Find Minimum In rotated Sorted Array

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;

        while(start < end){
            let mid = start + Math.floor((end  - start) / 2);
            const isBad = isBadVersion(mid);
            if(!isBad){
                start = mid + 1;
            }else{
               end = mid
            }
        }
        return end
    };
};

// leetcode 278 first bad version

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1]

    let s = 0;
    let e = nums.length - 1;
    let ans = [-1, -1];
    while(s < e){
        let m = s + Math.floor((e - s) / 2);

        if(nums[m] < target){
            s = m + 1;
        }else{
            e = m
        }
    }

    if(nums[s] === target){
        ans[0] = s
    }

    s = 0;
    e = nums.length - 1;

    while(s < e){
        let m = s + Math.ceil((e - s) / 2);

        if(nums[m] > target) e = m - 1;
        else s = m;
    }

    if(nums[e] === target){
        ans[1] = e
    }

    return ans;
};

// leetcode 34 find first and last position of element in sorted array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;

    let ans = [-1,-1];

    while(s <= e){
        let m = s + Math.floor((e - s) / 2);
        if(nums[m] === target){
            ans[0] = m;
            e = m - 1;
        }else if(nums[m]< target){
            s = m + 1;
        }else{
            e = m - 1;
        }
    }
    
    s = 0;
    e = nums.length - 1;
     while(s <= e){
        let m = s + Math.floor((e - s) / 2);
        if(nums[m] === target){
            ans[1] = m;
            s = m + 1;
        }else if(nums[m]< target){
            s = m + 1;
        }else{
            e = m - 1;
        }
    }
    return ans;
};

// leetcode 34 find first and last position of element in sorted array


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let s = 0;
    let e = arr.length -1;
    while(s <= e){
        let m = s + Math.floor((e - s) / 2);
        if(arr[m] == arr[m - 1]){
            let leftCount = m - 1 -s;
            if(leftCount % 2 === 1){
                e = m - 2;
            }else{
                s = m  + 1;
            }
        } else if(arr[m] == arr[m+ 1]){
            let lCount = m-s;
            if(lCount % 2 === 1){
                e = m - 1;
            }else{
                s = m + 2
            }
        }else{
            return arr[m];
        }
    }
};

// leetcode 540 find first and last position of element in sorted array
