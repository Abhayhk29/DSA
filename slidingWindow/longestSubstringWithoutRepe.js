// longestg and non repeating means unique character
// subarray or substring
// consition is given
// slidinf window
let input = 'pwwkew'

function longestSubstringUnique(str){
    let obj = new Set();
    let start = 0;
    let end = 0;
    let max = 0;

     while (end < str.length) {
        if(!obj.has(str[end])){
            obj.add(str[end]);
            max = Math.max(max, obj.size);
            end++
        }else{
            obj.delete(str[start]);
            start++;
        }
     }

     return max;
}

console.log(longestSubstringUnique(input));