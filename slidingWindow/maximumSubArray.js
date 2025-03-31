let input = [2,5,1,8,2,9,1];
let k = 3;
let size = input.length - 1;

let i = 0;
let j = 0;

let sum = 0;
let max = -Infinity;
while (j < size) {
    sum += input[j];
    if(j - i + 1 === k){
        max = Math.max(sum, max);
        sum = sum - input[i];
        i++;
        j++;
    }else{
        j++;
    }
}

console.log(max);
 

