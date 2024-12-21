// combination sum : [2,3,6,7] target : 7;

function combinationSum(arr,target){
    let result = [];

    function backtrack(start, sum, temp){
        if(sum === target){
            result.push([...temp]);
            return;
        }

        if(sum > target){
            return;
        }

        for (let i = start; i < arr.length; i++) {
            temp.push(arr[i]);
            backtrack(i, sum + arr[i], temp);
            temp.pop()
        }
    }

    backtrack(0,0, []);
    return result;
}

console.log(combinationSum([2,3,5],8));