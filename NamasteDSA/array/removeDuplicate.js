function removeDuplicates(arr){
    let first = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
         if(arr[i] > arr[first]){
            first += 1;
            arr[first] = arr[i]
         }
    }

    return first + 1;
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


// remove 
function leetcode28(nums,val){
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != val){
            nums[x] = nums[i];
            x += 1;
        }
    }

    return x;
}


// reverse string in a array
function reverseString(s){
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = s[len - 1- i];
        s[len - 1- i] = s[i]
        s[i] = temp;
    }

    return s;
}



// Best time for stock 
function maxProfit(arr){
     let min = arr[0];
     let maxProfit = 0;

     for (let i = 0; i < arr.length; i++) {
        if(arr[i] - min > maxProfit){
            maxProfit = arr[i] - min;
        }
        if(arr[i] < min){
            min = arr[i];
        }
     }

     return maxProfit;
}


// sort merger array 

var merge = function(nums1, m, nums2, n) {
    // from back to array
    let p1 = m  - 1;
    let p2 = n  - 1;

    for (let i = m + n - 1; i >= 0; i--) {

        if(p2 < 0){
            break;
        }
        if( p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            p1--;
        }else{
            nums1[i] = nums2[p2];
            p2--;  
        }
    }


}


function moveZero(nums){
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            nums[pointer] = nums[i];
            pointer++
        }
    }

    for (let j = pointer; j < nums.length; j++) {
        nums[j] = 0;
    }

    return nums;
}

console.log(moveZero([1,0,2,0,0,6,8,12]))

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;

    let temp = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] == 1){
            temp++;
        } else{
            max = Math.max(max,temp);
            temp = 0;
        }
    }

    max = Math.max(temp,max);


    return max;
};

var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = (n*(n + 1)) / 2;
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }

    return totalSum - sum;
};

var singleNumber = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }

    let obj = {};

    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }

    for(let i =0 ; i < nums.length; i++){
        if(obj[nums[i]] == 1){
            return nums[i]
        }
    }
};