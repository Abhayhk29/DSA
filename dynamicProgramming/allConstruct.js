const allConstruct = (target, arr) => {
    if(target === '') return [[]];

    const result = [];
    for (const word of arr) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffuixWay = allConstruct(suffix,arr);
            const targetWays = suffuixWay.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}


const allConstructMemo = (target, arr, memo={}) => {
    if (target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];
    for (const word of arr) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffuixWay = allConstruct(suffix,arr,memo);
            const targetWays = suffuixWay.map(way => [word, ...way]);
            result.push(...targetWays);

        }
    }
    memo[target] = result;
    return result;
}


// time : O(n^M)
// space O(m)
// memo
// time : O(n^M)
// space O(m)


const allConstructTab = (target, arr) => {
    const table = Array(target.length + 1)
     .fill()
      .map(() => [])
    table[0] = [[]];

    // space = O(n^m)
    // time = O(n^m)

    for (let i = 0; i < target.length; i++) {
        for (const word of arr) {
            if(target.slice(i, i + word.length) === word){
                const newCom = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCom);
            }
        }
        
    }

    return table[target.length]
}

console.log(allConstructMemo('purple',['purp','p','ur','le','purpl']));
console.log(allConstructMemo('abcdef',['ab','abc','cd','def','abcd','ef','c']));
console.log(allConstructMemo('skateboard',['ab','abc','cd','def','abcd','ef','c']));
console.log(allConstructTab('purple',['purp','p','ur','le','purpl']));
console.log(allConstructTab('abcdef',['ab','abc','cd','def','abcd','ef','c']));
console.log(allConstructTab('skateboard',['ab','abc','cd','def','abcd','ef','c']));