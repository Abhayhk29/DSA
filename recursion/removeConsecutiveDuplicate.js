// remove duplicate consecutive ~Input : aabccba Output: abcba
function removeConsecutiveDuplicates(str){
    let first = str[0];
    let outPut = first;
    for (let i = 1; i < str.length; i++) {
        if(first == str[i]){
            str.substring(1);
        }else{
            first = str[i];
            outPut += str[i];
        }
    }
    console.log(outPut);
}

function removeConsecutive(str){
    if(str.length <= 1){
        return str;
    }

    if(str[0] == str[1]){
        return removeConsecutive(str.substring(1));
    } else {
        return str[0] + removeConsecutive(str.substring(1));
    }
}

console.log(removeConsecutive("aabccba"));
console.log(removeConsecutive("geeksforgeeks"));
console.log(removeConsecutive("aaaaabbbbbb"));