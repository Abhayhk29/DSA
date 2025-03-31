let nums = [12, -1, -7, 8, -18, 30, 16, 28];
function firstNegativeNumber() {
  let nums = [12, -1, -7, 8, -18, 30, 16, 28];
  let k = 3;

  let start = 0;
  let end = 0;
  let result = [];
  let queue = [];

  while (end < nums.length) {
    if (Math.sign(nums[end]) === -1) {
      queue.push(nums[end]);
    }

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (queue.length === 0) {
        result.push(0);
      } else {
        result.push(queue[0]);
      }
      if (nums[start] === queue[0]) {
        queue.shift();
      }
      start++;
      end++;
    }
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


function bruteForceFor(nums, k){
    let result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        let foundBNegative = false;
        for (let j = i; j < i + k; j++) {
            if(nums[j] < 0){
                result.push(nums[j]);
                foundBNegative = true;
                break;
            }
        }
        if(!foundBNegative){
            result.push(0)
        }
    }

    return result;
}


function slidingOptimizedWay(nums,k){
    let start = 0;
    let end = 0;
    let result = [];
    let queue = [];

    while (end < nums.length) {
        if(Math.sign(nums[end]) === -1){
            queue.push(nums[end])
        }

        if(end- start + 1 < k){
            end++
        }else if (end - start + 1 === k){
            if(queue.length === 0){
                result.push(0);
            }else{
                result.push(queue[0]);
            }
            if(nums[start] === queue[0]){
                queue.shift();
            }

            start++;
            end++
        }
    }

    return result;
}
console.log(bruteForceFor(nums, 3));
console.log(slidingOptimizedWay(nums, 3));
// console.log(result);
