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
    // console.log(obj);
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


function toysQuestion(str){
    let start = 0;
    let end = 0;
    let map = new Map();

    let max = 0;

    while (end < str.length) {
        if(!map.has(str[end])){
            map.set(str[end],1);
        }else{
            map.set(str[end],map.get(str[end] + 1))
        }

        if(map.size < k){
            end++;
        } else if(map.size === k){
            max = Math.max(end - start + 1,max);
            end++;
        }else if(map.size > k){
            while (map.size > k) {
                if(map.get(str[start] > 1)){
                    map.set(str[start], map.get[str[start]] - 1);
                }else{
                    map.delete(str[start]);
                }
                start++;
            }
            end++;
        }
    }

    return max;
}


console.log(toysQuestion(str,k))
// console.log(Object.values(obj))
// console.log(Object.keys(obj));
console.log(max);
