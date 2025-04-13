function nearestLargetInArray(arr){
    let n = arr.length - 1;
    let result = new Array(n);
    let stack = [];

    for (let i = n; i >= 0; i--) {
        if(stack.length === 0){
            result[n] = -1;
        }else if(stack.length > 0 && stack[stack.length - 1] > arr[i]){
            result[i] = stack[stack.length - 1];
        } else if(stack.length > 0 && stack[stack.length - 1] <= arr[i]){
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if(stack.length === 0){
                result[i] = -1;
            }else{
                result[i] = stack[stack.length - 1];
            }
        }
        stack.push(arr[i])
    }

    return result;
}

function nearestLargetInArrayLeft(arr){
    let n = arr.length - 1;
    let result = new Array(n);
    let stack = [];

    for (let i = n; i >= 0; i--) {
        if(stack.length === 0){
            result[n] = -1;
        }else if(stack.length > 0 && stack[stack.length - 1] > arr[i]){
            result[i] = stack[stack.length - 1];
        } else if(stack.length > 0 && stack[stack.length - 1] <= arr[i]){
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if(stack.length === 0){
                result[i] = -1;
            }else{
                result[i] = stack[stack.length - 1];
            }
        }
        stack.push(arr[i])
    }

    return result;
}
console.log(nearestLargetInArray([1, 3, 2, 4]))
console.log(nearestLargetInArray([6, 8, 0, 1, 3]))
console.log(nearestLargetInArray([1,2,1]))
console.log(nearestLargetInArray([50, 40, 30, 10]))