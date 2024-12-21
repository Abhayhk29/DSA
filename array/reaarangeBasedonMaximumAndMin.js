// rearrange array based on maximum aon sorted array 
//  input = [1,2,3,4,5,6,7] output = [7,1,6,2,5,3,4];

function basedOnMaxiAndMin(arr){
    let temp = [];
    let start = 0;
    let end = arr.length - 1;
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if(flag){
            temp[i] = arr[end--];
        } else {
            temp[i] = arr[start++];
        }
        flag = !flag;
    }

    return temp;
}

console.log(basedOnMaxiAndMin([1,2,3,4,5,6,7]));