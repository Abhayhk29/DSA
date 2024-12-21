// when a choice affect future answer use backtracking
function create2DArray(r,c){
    let arr = [];
    let rows = r;
    let columns = c;

    // creating two-dimensional array
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = '';
        }
    }

    return arr;
}

function isSafe(board,row,col,num){
    // check the row
    for (let i = 0; i < board.length; i++) {
        // check if the number is in the row or not
        if(board[row][col] == num){
            return false;
        }
    }

    // check the col
    for (const nums of board) {
        // check if the number is in the row or not
        if(nums[col] == num){
            return false;
        }
    }

    let sqrt = Math.sqrt(board.length);
    let start = row - row % sqrt;
    let colStart = col = col % sqrt;

    for (let r = start; r < start + sqrt; r++) {
        for (let c = colStart; c < colStart + sqrt; c++) {
           if(board[r][c] == num){
            return false;
           } 
        }
        
    }    

    return true;        
}


function solveBoard(board){
    let n =  board.length;
    let row = -1;
    let col = -1;

    let emptyLeft = true;

    // this is how we are replacing the r,c from arguments
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(board[i][j] == 0){
                row = i;
                col = j;
                emptyLeft = false;
                break;
            }
            
        }
        // if you found some empty element in row, then break
        if(emptyLeft === false){
            break;
        }
        
    }

    if(emptyLeft){
        return true;
    }

    for (let number = 1; number <= 9; number++) {
        if(isSafe(board, row, col, number )){
            board[row][col] = number;
            if(solveBoard(board)){
                // found the answer
                display(board);
                return true;
            } else {
                board[row][col] = 0;
            }
        }
        
    }

    return false;

}


function display(board){
    for (const num of board) {
        for (const col of num) {
            console.log( col + '/n');
        }
    }
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

console.log(solveBoard(board));

// O(9^n^2)
// s n^2

