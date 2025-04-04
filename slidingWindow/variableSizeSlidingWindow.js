// Input  : [4,1,1,1,2,3,5]
// size : 7
// k = 5
// longest/largest size subarray of sum k
// fixed and variable sliding window
// identification : arr /string 
// condition based window size

// diff  

let arr = [4,1,1,1,2,3,5];
let start = 0;
let end = 0;
let k = 5;

let sum = 0;
let max = 0;

while (end < arr.length) {
    sum += arr[end];
    if(sum < k){
        end++;
    } else if(sum === k){
        if((end -start + 1) > max){
            max = end - start + 1;
        }
        end++;
    }else if (sum > k){
        while(sum > k){
            sum -= arr[start];
            start++;
        }
        end++;
    }
}

function variableSlidingWindow(arr,k){
    let start = 0;
    let end = 0;

    let sum  = 0;
    let max = 0;

    // while (end < arr.length) {
    //     sum += arr[end];
    //     if(sum < k){
    //         end++;
    //     } else if(sum === k){
    //         if((end -start + 1) > max){
    //             max = end - start + 1;
    //         }
    //         end++;
    //     }else if (sum > k){
    //         while(sum > k){
    //             sum -= arr[start];
    //             start++;
    //         }
    //         end++;
    //     }
    // }

    while (end < arr.length) {
        sum += arr[end];

        if(sum < k){
            end++;
        }else if(sum === k){
            // if((end - start + 1) > max){
            //     max = end - start + 1;
            // }
            max = Math.max(max, (end - start + 1))
            end++;
        } else if(sum > k){
            while(sum > k){
                sum -= arr[start];
                start++;
            }
            end++
        }
    }

    return max;
}

console.log(variableSlidingWindow(arr,k))
console.log(max);
