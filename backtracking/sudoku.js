function  solveSuduku(row, col, board){
    if(row === 9){
        return true;
    }

    if(col === 9){
        return solveSuduku(row + 1, 0, board);
    }

    if(board[row][col] != 0){
        return solveSuduku(row, col + 1, board);
    }

    for (let i = 1; i <= 9; i++) {
        if(canNumberBePlaced(i, row, col, board)){
            board[row][col] = i;
            res = solveSuduku(row, col + 1, board);
            if(res) return true;
        }
    }

    board[row][col] = 0;
    return false;
}

function canNumberBePlaced(num, row, col, board){
    for (let i = 0; i < 9; i++) {
        if(board[row][i] === num) return false;
    }

    for(let j= 0; j < 9; j++){
        if(board[j][col] === num) return false;
    }

    let sr = parseInt(row / 3) * 3;
    let sc = parseInt(col / 3) * 3;

    for (let i = sr; i < sr+3; i++) {
        for (let j = sc; j < sc + 3; j++) {
            if(board[i][j] == num) return true;
        }
    }

    return true;
}

let board = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
];


console.log(solveSuduku(0,0,board));