let temp = [];
let ans = {
    result : []
};
let n = 4;
let board = create2DArray(n,n);

function create2DArray(r,c){
    let arr = [];
    let rows = r;
    let columns = c;

    // creating two-dimensional array
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = 0 ;
        }
    }

    return arr;
}


function check(rowIdx, coldIdx, board){
    // check row
    for(let col = 0; col < coldIdx; col++){
        if(board[rowIdx][col] === 1){
            return false;
        }
    }

    // check diag 1 
    let i = rowIdx;
    let j = coldIdx;

    while (i >=0 && j >= 0) {
        if(board[i][j] === 1){
            return false;
        }
        i -= 1;
        j -= 1;
    }

    // check diagonal 2

     i = rowIdx;
     j = coldIdx;

     while (i < n && j >= 0) {
        if(board[i][j] === 1){
            return false;
        }

        i += 1;
        j -= 1;
     }

     return true;
}


function helper(colIdx, board, n , temp){
    if(colIdx === n){
        console.log(ans);
        ans.result.push([temp, ...ans.result])
        console.log(ans);
        return;
    }

    // col wise traversel
    for (let rowIdx = 0; rowIdx < n; rowIdx++) {
        if(check(rowIdx, colIdx, board)){
            temp.push(rowIdx + 1);
            board[rowIdx][colIdx] = 1;
            helper(colIdx + 1, board, n , temp);
            temp.pop();
            board[rowIdx][colIdx] = 0;
        }
        
    }
}


console.log(helper(0,board,n, temp));
console.log(ans);

