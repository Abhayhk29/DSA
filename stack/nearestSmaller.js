let arr = [4,5,2  ,10,8]

function nearestSmallestInArrayLeft(arr){
    let n = arr.length - 1;
    let result = new Array(n);
    let stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(stack.length === 0){
            result[i] = -1;
        }else if(stack.length > 0 && stack[stack.length - 1] < arr[i]){
            result[i] = stack[stack.length - 1];
        } else if(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
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

function nearestSmallestInArrayRight(arr){
    let n = arr.length - 1;
    let result = new Array(n);
    let stack = [];

    for (let i = n; i >= 0; i--) {
        if(stack.length === 0){
            result[i] = -1;
        }else if(stack.length > 0 && stack[stack.length - 1] < arr[i]){
            result[i] = stack[stack.length - 1];
        } else if(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
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

console.log(nearestSmallestInArrayLeft(arr))
console.log(nearestSmallestInArrayRight(arr))