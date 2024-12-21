function calculateWinner(board,target, row, col){
    if(row > board.length - 1 || col > board[0].length - 1){
        return false;
    }

    if(board[row][col] == target){
        return true;
    }

    calculateWinner(board, target, row, col+1);
    calculateWinner(board, target, row+1, col);
    calculateWinner(board, target, row + 1, col+1);
}

function girdBoard(r,c){
    let arr = [];
    let rows = r;
    let columns = c;
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = '';
        }
    }
    return arr;
}
let grid = girdBoard(5,5);
grid[0][0] = '0'
grid[0][1] = 'x'
grid[0][2] = 'x'
console.log(grid);


console.log(calculateWinner(grid,'x',0,0));