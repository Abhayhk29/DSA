// 3*3 Matrix : How many way you cna reach there : Right and down
function mazePath(r,c){
    if( r == 1 || c == 1){
        return 1;
    }

    let left = mazePath(r - 1, c);
    let right = mazePath(r, c - 1);

    return left + right;
}

function printThePattern(p, r,c){
    if(r == 1 && c == 1){
         console.log(p);   
    }

    if(r > 1){
        printThePattern(p+'D', r - 1, c)
    }

    if(c > 1){
        printThePattern(p+'R', r, c - 1)
    }
}

function printThePatternArr(p,r,c){
    if(r == 1 && c == 1){
        let arr = [];
        arr.push(p);
        return arr;
    }

    let newArr = [];
    if(r > 1){
        newArr.push(printThePatternArr(p+'D', r - 1, c));
    }

    if(c > 1){
        newArr.push(printThePatternArr(p+'R', r, c - 1))
    }

    return newArr.flat();
}

function printThePatternArrDiagonal(p,r,c){
    if(r == 1 && c == 1){
        let arr = [];
        arr.push(p);
        return arr;
    }

    let newArr = [];

    if(r > 1 && c > 1){
        newArr.push(printThePatternArrDiagonal(p+'D', r - 1, c - 1));
    }

    if(r > 1){
        newArr.push(printThePatternArrDiagonal(p+'V', r - 1, c));
    }

    if(c > 1){
        newArr.push(printThePatternArrDiagonal(p+'H', r, c - 1))
    }

    return newArr.flat();
}


// console.log(printThePattern('',6,6));
console.log(printThePatternArrDiagonal('',3,3));