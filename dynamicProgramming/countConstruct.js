const countConstruct = (target, arr) => {
    if(target === ''){
        return 1;
    }
    
    let count = 0;
    for (const word of arr) {
        if(target.indexOf(word) === 0){
            const numWay = countConstruct(target.slice(word.length), arr);
            count += numWay;
        }
    }

    return count;
}


const countConstructMemo = (target, arr, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === ''){
        return 1;
    }
    
    let count = 0;
    for (const word of arr) {
        if(target.indexOf(word) === 0){
            const numWay = countConstructMemo(target.slice(word.length), arr, memo);
            count += numWay;
        }
    }
    memo[target] = count
    return count;
}

const countConstructTab = (target, words) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    // time : O(m^2n)
    // space : O(m)

    for (let i = 0; i <= target.length; i++) {
        for (const word of words) {
            if(target.slice(i,i+word.length) === word){
                table[i + word.length] += table[i];
            }
        }
    }
    // console.log(table);
    return table[target.length];
}

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
//  console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
//  console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
 console.log(countConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
 console.log(countConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
 console.log(countConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
 console.log(countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]));