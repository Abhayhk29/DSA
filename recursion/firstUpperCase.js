// input : aBhay;
// output: B

function firstUpperCase(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i].toUpperCase()) return arr[i];
    }

    return 0;
}

function recMethod(str,i  = 0){
    if(i == str.length){
        return 0;
    }

    if(str[i] == str[i].toUpperCase()){
        return str[i];
    }

    return recMethod(str,i+1);
}

console.log(recMethod('aBhay'));