let arr = [1,3,-1,-3,5,3,6,7];
let k = 3

function maximumSubArray(arr,k){
    let start = 0;
    let end = 0;

    let qu = [];
    let res = [];

    while (end < arr.length) {
        while (qu.length > 0 && qu[qu.length - 1] < arr[end]) {
            qu.pop()
        }

        qu.push(arr[end]);

        if((end - start + 1) < k){
            end++
        }else{
            res.push(qu[0]);
            if(qu[0] === arr[start]){
                qu.shift();
            }
            start++;
            end++;
        }
    }

    return res;
}

console.log(maximumSubArray(arr,k))