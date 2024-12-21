// let str = 'abaccab';
// let k = 0;
// let start = 0;
// let end = 0;

// let obj = {};

// while (end < str.length){
//     if(obj[str[end]]){
//         obj[str[end]] += 1;
//     }else{
//         obj[str[end]] += 1;
//     }

//     if(Object.keys(obj) === k){
//         if((end - start + 1) > max){
//             max = end - start + 1;
//         }
//         end++;
//     }else if (Object.keys(obj) > keys){

//     }
// }

let start = 0;
let end = 0;
let k = 2; //maximu individual 
let str = 'abaccab';
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
