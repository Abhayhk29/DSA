let nums = [12, -1, -7, 8, -18, 30, 16, 28];
let k = 3;

let start = 0;
let end = 0;
let result = [];
let queue = [];

while (end < nums.length) {
    if(Math.sign(nums[end]) === -1){
        queue.push(nums[end])
    }

    if( (end - start + 1) < k){
        end++
    } else if((end -start + 1) === k){
        if(queue.length === 0){
            result.push(0);
        }else{
            result.push(queue[0]);
        }
        if(nums[start] === queue[0]){
            queue.shift();
        }
        start++;
        end++;
    }
}

// btutt forcr
function return_arr(arr, k) {
    var final_list = [];
    var l = 0;
    var r = k - l - 1;
    var count = 0;
    while (count < arr.length - k + 1) {
        var temp_arr = arr.slice(l, r + 1);
        for (var i = 0; i < temp_arr.length; i++) {
            if (temp_arr[i] < 0) {
                final_list.push(temp_arr[i]);
                break;
            }
            if (temp_arr[temp_arr.length - 1] === temp_arr[i]) {
                final_list.push(0);
            }
        }
        count += 1;
        l += 1;
        r += 1;
    }
    return final_list;
}

console.log(return_arr(nums,3));
console.log(result);