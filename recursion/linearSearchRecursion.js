function recursionLinearSearch(arr, tar, index){
    if(arr.length == index){
        return false;
    }

    return arr[index] == tar || recursionLinearSearch(arr,tar,index+=1);
}

function recursionLinearSearchFromLast(arr, tar, index){
    if(index < 0){
        return false;
    }

    return arr[index] == tar || recursionLinearSearchFromLast(arr,tar,index - 1);
}

let arrResult = [];
function recursionLinearSearchFromLastAll(arr, tar, index){
    if(index < 0){
        return;
    }
    
    
    if(arr[index] == tar)  arrResult.push(index);
    
    return recursionLinearSearchFromLastAll(arr,tar,index - 1);
}

function returnTypeArrayList(arr, tar, index, tempArr){
    if(index == arr.length - 1){
        return tempArr
    };

    if(arr[index] == tar)  tempArr.push(index);

    return returnTypeArrayList(arr, tar, index + 1, tempArr)
}

function returnArrayList(arr, tar, index){
    let newArray = [];

    if(index == arr.length){
        return newArray;
    }

    if(arr[index] == tar){
        newArray.push(index);
    }

    let arrN = returnArrayList(arr,tar, index + 1);

    if(arrN.length > 0){
        newArray.push(arrN);
    }
    return newArray.flat();
}


console.log(returnArrayList([1,4,6,7,6,96,234,45,23],6 , 0));
// console.log(arrResult);