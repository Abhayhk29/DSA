let numberObj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}


function letterCombination(idx, temp, str){
    if(idx === str.length){
        // console.log(temp)   
        ans.push(temp);
        return;
    }

    // let str = '';
    let ch = str[idx];
    for (const letter of numberObj[ch]) {
        temp += letter;
        letterCombination(idx + 1, temp, str);
        temp = temp.slice(0,-1);
    }
}

let nums = '2349';
let ans = [];
letterCombination(0,'',nums);
console.log(ans);

