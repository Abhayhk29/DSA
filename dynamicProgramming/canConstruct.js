const canConstruct = (target, arr) => {
   if(target === ''){
    return true;
   }

   for (const word of arr) {
       if(target.indexOf(word) === 0){
        const suffix = target.slice(word.length)
        if (canConstruct(suffix, arr) === true){
            return true;
        }
       }
   }

   return false;
}

// space : O(m^2)
// time O(n^m * m)

const canConstructMemo = (target, arr, memo = {}) => {
    if(target in memo) return memo[target];

    if(target === ''){
     return true;
    }
 
    for (const word of arr) {
        if(target.indexOf(word) === 0){
         const suffix = target.slice(word.length)
         if (canConstructMemo(suffix, arr, memo) === true){
            memo[target] = true;
             return true;
         }
        }
    }
    memo[target] = false
    return false;
 }


 const canConstructTab = (target, arr) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    // time = O(m^2*n)
    // space = O(m)
    // console.log(table)
    for (let i = 0; i <= target.length; i++) {
        if(table[i] === true){
            for (const word of arr) {
                // if the word matched the chaarcters at position i
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] = true;
                }
            }
        }else {
            table[i] = false;
        }
        
    }
    // console.log(table);
    return table[target.length];
 }

//  console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
//  console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
 console.log(canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
 console.log(canConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
 console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
 console.log(canConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));