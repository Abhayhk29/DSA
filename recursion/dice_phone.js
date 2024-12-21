// dice Problem
// taking something and processing

function diceList(p,target){
    if(target == 0){
        console.log(p);
        return;
    }
    // console.log('fdsfds');
    for (let i = 1; i <= 6 && i <= target; i++) {
        diceList(p + i, target - i);
    }
}

function diceListArr(p,target){
    if(target == 0){
        let arr = [];
        arr.push(p);
        return arr;
    }

    let newArr = [];
    // console.log('fdsfds');
    for (let i = 1; i <= 6 && i <= target; i++) {
        newArr.push(diceListArr(p + i, target - i));
    }

    return newArr.flat();
}

function diceWithAnotherFace(p,target, face){
    if(target == 0){
        console.log(p);
        return;
    }
    // console.log('fdsfds');
    for (let i = 1; i <= face && i <= target; i++) {
        diceWithAnotherFace(p + i, target - i, face);
    }
}

// console.log(diceListArr( '' , 4));

console.log(diceWithAnotherFace( '' , 6, 7));