  /**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix[0].length;

    let heap = new MinPriorityQueue(x => x.val);

    for(let i = 0; i < n; i++){
        heap.push({val:matrix[i][0], row:i, col:0});
    }

    for(let j = 0; j < k - 1; j++){
        let {val,row,col} = heap.pop();
        if(col + 1 < n){
            heap.push({val:matrix[row][col + 1], row:row, col:col + 1})
        }
    }

    return heap.pop().val;
};

// T = O(n*2^n)
// S = O(n*2^n)

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    const backstrack = (path, start) => {
        if(path.length === k){
            result.push([...path]);
            return;
        }
        for(let i = start; i <= n; i++){
            path.push(i);
            backstrack(path,i + 1)
            path.pop()
        }
    }

    backstrack([],1);
    return result;
};

// t = O(k* (n! / K!*(n-k)!))
// s : O(k* (n! / K!*(n-k)!))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    const backtrack = (path) => {
        if(path.length === nums.length){
            result.push([...path]);
            // return
        }
        for(let i = 0; i < nums.length; i++){
            if(!path.includes(nums[i])){
                path.push(nums[i]);
                backtrack(path);
                path.pop()
            }
        }
    }

    backtrack([]);

    return result;
};

// time O(n*n!)
// s O(n)  // O(n^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort((a,b) => (a - b));

    const backtrack = (path, start) => {
        result.push([...path]);
        for(let i = start; i < nums.length; i++){
            if(i > start && nums[i - 1] === nums[i])
                continue;

            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop()
        }
    }

    backtrack([],0);
    return result;
};

// time = O(n*2^n)
// space = O(n)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    let backtrack = (path, sum, start) => {
        if(sum === 0){
            result.push([...path])
        }
        if(sum <= 0){
            return;
        }
        for(let i = start; i < candidates.length; i++){
            path.push(candidates[i])
            backtrack(path, sum - candidates[i], i)
            path.pop();
        }
    }

    backtrack([],target,0);
    return result;
};


// t = O(n^(T/M + 1))
// T/M : Depth of trees
// n => number of children

//  T = Target sum
// M (Min value in array)

// S = O(T/M)


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => (a - b))

    const backtrack = (path, sum, start) => {
        if(sum === 0){
            result.push([...path])
        }

        if(sum <= 0) return;

        for(let i = start; i < candidates.length; i++ ){
            if( i > start && candidates[i] === candidates[i- 1]) continue;

            if(candidates[i] > sum ) continue;
            
            path.push(candidates[i]);
            backtrack(path, sum - candidates[i], i + 1);
            path.pop();
        }
    }

    backtrack([],target,0);
    return result;
};


//  s = O(n)
// t = O(2^n)

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    let backtrack = (target , path, start) => {
        if(target === 0 && path.length == k){
            result.push([...path])
        }
        if(target === 0) return;
        for(let i = start; i <= 9; i++){
            path.push(i);
            backtrack( target - i, path, i + 1);
            path.pop()
        }
    }

    backtrack(n, [],1);
    return result;
};

// t = n! / K! (n - K)! = O(9/(k-1)! (9 -k)!)
// s = O(k)

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let numberObj = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    let result = [];

    const backtrack = (path,index) => {
        if(path.length == digits.length){
            result.push(path.join(''));
            return;
        }

        let choices = numberObj[digits[index]];
        for(let i = 0; i < choices.length; i++){
            path.push(choices[i]);
            backtrack(path,index+1);
            path.pop();
        }
    }

    backtrack([],0);
    return result;
};

// t = O(n.4^n)
// s = O(n.4^n) || O(n)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    nums.sort((a,b) => (a - b));

    const backtrack = (path, arr) => {
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }
        for(let i = 0; i < arr.length; i++ ){
            if(i > 0 && arr[i] === arr[i - 1])
                continue;
            path.push(arr[i]);
            backtrack(path, [...arr.slice(0,i), ...arr.slice(i+1)]);
            path.pop();
        }
    }

    backtrack([],nums);
    return result;
};


// space : O(n)
//  time : O(n. n!)

