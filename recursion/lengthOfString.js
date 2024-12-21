// input :"abhay";
// outPut: "5"

function lengthOfString(str){
    if(str == ''){
        return 0;
    }

    return 1 + lengthOfString(str.substring(1));
}

console.log(lengthOfString('abhaypandey'));