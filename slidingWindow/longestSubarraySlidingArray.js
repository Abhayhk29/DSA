// longest substring of k
// unique characters
// input and Output 
// INput : aa bac be be be
// k =3
// longest substring
// variable no window size
// aabacbe  a : 3, b:2 , c:1 , e :1
let start = 0;
let end = 0;
let k = 3; //maximu individual 
let str = 'aabacbebebe';
let max = 0;
let obj = {
}

while(end < str.length){
    if(obj[str[end]]){
        obj[str[end]] += 1;
    } else {
        obj[str[end]] = 1;
    }
    console.log(obj);
    if(Object.keys(obj).length < k){
        end++
    } else if (Object.keys(obj).length === k){
        if((end + 1 - start) > max ){
            max = end + 1 - start;
        }
        end++;
    } else if (Object.keys(obj).length > k){
        while(Object.keys(obj).length > k){
            if(obj[str[start]] > 1){
                obj[str[start]] -= 1;
            }else{
                delete obj[str[start]];
            }
            start++;
        }
        end++;
    }
}



console.log(Object.values(obj))
console.log(Object.keys(obj));
console.log(max);
