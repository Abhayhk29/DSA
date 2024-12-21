// input : 1 3 2 4

// function geekOnaci(arr, position){
//     // console.log(arr);
//     if(position == 0){
//         console.log('inside')
//         return;
//     }

//     let len = arr.length - 1;

//     arr[len + 1] =  arr[len - 2] + arr[len - 1] + arr[len];
//     // console.log('-----------------------------------');
//     // console.log(arr);
//     // console.log(len);
//     // console.log('-----------------------------------');
//     geekOnaci(arr, position - 1);
// }

function geekOnaci(arr, position){
    // console.log(arr);
    debugger;
    if(position == 0){
        console.log('inside')
        console.log(arr[arr.length - 1]);
        return arr[arr.length - 1];
    }

    let len = arr.length - 1;

    arr[len + 1] =  arr[len - 2] + arr[len - 1] + arr[len];
    // console.log('-----------------------------------');
    // console.log(arr);
    // console.log(len);
    // console.log('-----------------------------------');
    return geekOnaci(arr, position - 1);
}
let arr = [1,3,2];
let lastVal = 6;
geekOnaci(arr, lastVal - arr.length );