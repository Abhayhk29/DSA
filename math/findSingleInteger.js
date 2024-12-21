// let input  = [10,2,2,1,0,0,10];
function firstIntegerTarget(arr){
    let output = {};
    for (const key of arr) {
        if(output[key]){
            delete output[key];
        }else{
            output[key] = 1
        }
    }

    return Object.keys(output).length > 0 ? Object.keys(output)[0] : '';
}

console.log(firstIntegerTarget([10,2,2,1,0,0,10]));