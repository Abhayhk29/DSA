// input nums : [1,3 , -1, -3, 5, 3, 6, 7];
// outPut : [3, 3, 5, 5, 6 , 7];


const maxSlidingWindowBrute = function(arr, k){
    const result = [];
    const n = arr.length;

    for (let i = 0; i <= n - k; i++) {   // 0(n)
        let max = arr[i];
        for (let j = 1; j < k; j++) {
            // o(n)
            if(arr[i + j] > max){
                max = arr[j+i];
            }
        }
        result.push(max);
    }

    return result;
}

// o(n^2)
// O(n)
// console.log(maxSlidingWindowBrute([1,3 , -1, -3, 5, 3, 6, 7], 3));
// brut force window

let nums = [1,3 , -1, -3, 5, 3, 6, 7];
// let nums = [1,-1];
let k = 3;
let i = 0;
    let j = 0; // end
    let result = [];
    let max = -Infinity;
    let sum = 0;
    while( j < nums.length){
        // sum += nums[i];
        max = Math.max(max, nums[i])
        if((j - i + 1) < k ){
            j++;
        } else if((j - i + 1) == k ){
            result.push(max);
            i++;
            j++;
            max = -Infinity;
        }
    }

console.log(result);

