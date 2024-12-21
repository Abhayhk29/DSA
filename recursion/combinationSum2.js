// input : [10,1,2,7,6,1,5], target = 8
// output: [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

function combination2(arr,target){
    let result = [];

    function findComb(start,sum,temp){
        if(sum === target){
            result.push([...temp]);
            return;
        }

        if(sum > target){
            return;
        }

        
    }
}