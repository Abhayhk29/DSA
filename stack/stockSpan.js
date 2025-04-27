function nearestLargetInArrayLeftStock(arr){
    let n = arr.length - 1;
    let result = new Array(n);
    let stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(stack.length === 0){
            result[i] = -1;
        }else if(stack.length > 0 && stack[stack.length - 1].first > arr[i]){
            result[i] = stack[stack.length - 1].second;
        } else if(stack.length > 0 && stack[stack.length - 1].first <= arr[i]){
            while (stack.length > 0 && stack[stack.length - 1].first <= arr[i]) {
                stack.pop();
            }
            if(stack.length === 0){
                result[i] = -1;
            }else{
                result[i] = stack[stack.length - 1].second;
            }
        }
        stack.push({ first: arr[i], second:i})
    }

    for (let i = 0; i < result.length; i++) {
        result[i] = i - result[i]
        
    }

    return result;
}



console.log(nearestLargetInArrayLeftStock([100,80,60,70,60,75,85]))
console.log(nearestLargetInArrayLeftStock( [10, 4, 5, 90, 120, 80]))