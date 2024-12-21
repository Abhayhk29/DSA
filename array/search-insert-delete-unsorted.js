// basic serach ex [1,2,3,4,5,6] search 3
function basicSearch(arr, item){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == item){
            return i;
        }
    }

    return -1;
}


console.log(basicSearch([1,2,3,4,5,6],6));