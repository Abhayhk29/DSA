// example of the dial pad in earlier phone
// example 1: 'abc' 2 : 'def'
function letterCombination(pr, up){
    if(up.length == 0){
        console.log(pr);
        return;
    }

    let digit = parseInt(up.charAt(0));
    // console.log(digit);
    for (let i = (digit - 1)*3; i < digit*3; i++) {
        let nextCh = getNextAl(i);
        letterCombination(pr+ nextCh, up.substring(1));
    }
}

function subSequenceArrayCombination(str,up){
    if(up.length == 0){
        let list = new Array();
        list.push(str);
        return list;
    }

    let digit = parseInt(up.charAt(0));
    
    let arrList = [];
    // console.log(digit);
    for (let i = (digit - 1)*3; i < digit*3; i++) {
        let nextCh = getNextAl(i);
        arrList.push(subSequenceArrayCombination(str+ nextCh, up.substring(1)));
    }

    return arrList.flat();
}

function letterCombinationCount(pr, up){
    if(up.length == 0){
        console.log(pr);
        return 1;
    }

    let count = 0;

    let digit = parseInt(up.charAt(0));
    // console.log(digit);
    for (let i = (digit - 1)*3; i < digit*3; i++) {
        let nextCh = getNextAl(i);
        count = count + letterCombinationCount(pr+ nextCh, up.substring(1));
    }

    return count;
}

function getNextAl(i){
    return String.fromCharCode('a'.charCodeAt(0) + i);
}

// console.log(getNextAl(3));

console.log(subSequenceArrayCombination('','12'));
