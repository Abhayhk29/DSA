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



