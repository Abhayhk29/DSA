/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // let result = 0

    // for(let i = 0; i < grid.length; i++){
    //     for(j = 0; j < grid[i].length; j++){
    //         if(grid[i][j] < 0){
    //             result += 1;
    //         }
    //     }
    // }

    // return result;
    let n = grid.length;
    let x = 0, i = grid[0].length - 1;
    let total = 0;
    while(i >= 0 && x < n) {
        if(grid[x][i] < 0) {
            total += n - x;
            i--;
        } else {
            x++;
        }
    }
    return total;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let num = nums[0]
    let min = Math.min(Infinity, num);
    for(let i = 1; i < nums.length; i++){
        num += nums[i];
        min = Math.min(min, num);
    }

    return min < 0 ? Math.abs(min) + 1 : 1;
};

// brute force
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let currSum = nums[0];
    // let maxSum = nums[0];

    // for(let i = 1; i < nums.length; i++){
    //     currSum = Math.max(currSum + nums[i], nums[i]);
    //     maxSum = Math.max(maxSum, currSum);
    // }

    // return maxSum;
    let maxSum = nums[0]
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            let sum = 0;
            for(k = i ; k <= j; k++){
                sum += nums[k]
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;

    // little better approach
    // let maxSum = nums[0]
    // for(let i = 0; i < nums.length; i++){
    //     let sum = 0;
    //     for(let j = i; j < nums.length; j++){
    //         sum += nums[j]
    //         maxSum = Math.max(maxSum, sum);
    //     }
    // }
    // return maxSum;
};

// better approach using kadane's algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let currSum = nums[0];
    // let maxSum = nums[0];

    // for(let i = 1; i < nums.length; i++){
    //     currSum = Math.max(currSum + nums[i], nums[i]);
    //     maxSum = Math.max(maxSum, currSum);
    // }

    // return maxSum;
    // let maxSum = nums[0]
    // for(let i = 0; i < nums.length; i++){
    //     let sum = 0;
    //     for(let j = i; j < nums.length; j++){
    //         sum += nums[j]
    //         maxSum = Math.max(maxSum, sum);
    //     }
    // }
    // return maxSum;
    let max = -Infinity;
    let currSum = 0;
    for(let num of nums){
        currSum += num;
        max = Math.max(max, currSum);
        if(currSum < 0){
            currSum = 0
        }
    }

    return max;
};
