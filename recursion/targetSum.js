// input : [1,1,1,1,1] target : 3
// output: -1 + 1 + 1 + 1 + 1 : 3

function findTarget(arr,target){
    let count  = 0;

    function calculate(index,sum){
        if(index == arr.length){
            if(sum == target){
                count++;
            }
        }else{
            calculate(index + 1, sum + arr[index]);
            calculate(index + 1, sum - arr[index]);
        }
    }

    calculate(0,0);
    return count;
}

console.log(findTarget([1,1,1,1,1],3));