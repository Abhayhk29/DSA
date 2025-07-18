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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // let hashT = new Set();

    // while(headB){
    //     hashT.add(headB);
    //     headB = headB.next;
    // }

    // while(headA){
    //     if(hashT.has(headA)){
    //         return headA;
    //     }
    //     headA = headA.next;
    // }

    // return null;

    let n = 0;
    let pn = headA;
    while(pn){
        n++;
        pn = pn.next;
    }

    let m = 0;
    let pb = headB;
    while(pb){
        m++;
        pb = pb.next;
    }

    let diff = Math.abs(n - m);

    if(n > m){
        let temp = headA;
        headA = headB;
        headB = temp
    }

    for(let i = 0;  i < diff; i++){
        headB = headB.next;
    }

    pn = headA;
    pm = headB;

    while(pn != pm){
        pn = pn.next;
        pm = pm.next;
    }


    return pn;

    // let pa = headA;
    // let pb = headB;

    // while(pa != pb){
    //     pa = pa === null ? headB : pa.next;
    //     pb = pb === null ? headA : pb.next;
    // }

    // return pa;
};

// t O(m + n)
// s O(1)


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let i = 0;
    // let j = height.length - 1;
    // let max = 0;
    // while(i < j){
    //     let temp = 0;
    //     if(height[i] < height[j]){
    //         temp = height[i] * ( j - i );
    //         i++;
    //     }else{
    //         temp = height[j] * (j - i);
    //         j--;
    //     }
    //         max = max > temp ? max : temp;
    // }

    // return max;

    let i = 0; 
    let j =  height.length - 1;
    let max = 0;

    while(i < j){
        let tempMax = Math.min(height[i] , height[j])* (j - i);
        max = Math.max(tempMax, max);
        if(height[i] > height[j]){
            --j
        }else{
            ++i;
        }
    }

    return max;
};


// t :  O(n)
//  s : O(1)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
    // const res = [];
    // nums.sort((a,b) => a - b);


    // for(let i = 0; i < nums.length - 2; i++){
        
    //     let l = i + 1;
    //     let r = nums.length - 1;

    //     if (i > 0 && nums[i] === nums[i - 1]) continue

    //     while(l < r){

    //         let threeSum = nums[l] + nums[r];
    //         if(threeSum == -nums[i]){
    //             res.push([nums[i], nums[l], nums[r]]);
    //             while(nums[l] === nums[l + 1]) l++;
    //             while(nums[r] === nums[r - 1]) r--;
    //             l++;
    //             r--;
    //         }
    //         else if(threeSum > -nums[i]){
    //             r--; 
    //         }else if(threeSum < -nums[i]){
    //             l++;
    //         }
    //     }
    // }

    // return res;
    // let ans = [];
    // arr.sort((a,b) => a - b);
    // (n log n + 0(n^2))
    // console.log(arr);
//     let len = arr.length - 1;
//     for (let i = 0; i < len; i++) {
//         if(i > 0 && arr[i] === arr[i - 1]) continue;

//         let j = i + 1;
//         let k = len - 1;

//         while( j < k){
//             let sum  = arr[i] + arr[j] + arr[k];
//             if(sum < 0){
//                 j++;
//             }else if(sum > 0){
//                 k--;
//             } else{
//                 ans.push([arr[i], arr[j], arr[k]]);
//                 j++;
//                 // k--;
//                 while(arr[j] == arr[j - 1] && j < k){
//                     j++
//                 }
//                 // while( j < k && arr[j] == arr[j - 1]) j++;
//                 // while(j < k && arr[k] == arr[k + 1]) k--;
//             }
//         }
//     }

//     return ans;
    
    // let res= [];
    // arr.sort((a,b) => a - b);
    
    // for(let i = 0; i< arr.length; i++){
    //     if(i > 0 && arr[i] === arr[i-1]){
    //         continue;
    //     }
    //     let l = i + 1;
    //     let r = arr.length - 1;
        
    //     while( l < r){
    //         let sum = arr[i] + arr[l] + arr[r];
    //         if(sum > 0){
    //             r--;
    //         }
            
    //         if(sum < 0){
    //             l++;
    //         }
            
    //         if(sum === 0){
    //             res.push([arr[i] , arr[l] , arr[r]])
    //             l++;
    //             while(arr[l] === arr[l - 1] && l < r){
    //                 l++;
    //             }
    //         }
    //     }
            
    // }
    // return res; 

    arr.sort((a,b) => a - b);
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != arr[i - 1]){
         twoSum(arr,i,ans)
        }
    }



    function twoSum(arr,x, ans){
        let i = x + 1 ;
        let j = arr.length - 1;

        while(i < j){
            let sum = arr[i] + arr[j] + arr[x];
            if(sum === 0){
                ans.push([arr[i], arr[j], arr[x]])
                ++i;
                --j;
                while( i < j && arr[i] == arr[i - 1]) i++;
            } else if(sum > 0){
                --j
            }else{
                ++i;
            }
        }
        return ans;
    }

    return ans;
};

// o(n^2)


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let n = arr.length;

    let maxL = [];
    maxL[0] = arr[0];
    for(let i = 1; i < n; i++){
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
    }

    let maxR = [];
    maxR[n - 1] = arr[n - 1];
    for(let i = n - 2; i >= 0; i--){
        maxR[i] = Math.max(maxR[i + 1], arr[i]);
    }

    let ans = 0;

    for(let i = 0; i <n ; i++){
        let waterTrapped = (Math.min(maxL[i], maxR[i]) - arr[i]);
        ans += waterTrapped < 0 ? 0  : waterTrapped;
    }

    return ans;
};

// S O(n)
// t O(n)





