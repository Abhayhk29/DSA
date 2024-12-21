// recursion :
// Backtracking: 
function queensGame(board,row){
    // console.log('---------------------------------------');
    // console.log(row);
    // console.log('---------------------------------------');
    if(row == board.length){
        console.log(board);
        display(board);
        console.log('');
        return 1;
    }

    let count = 0;
    // placing the queen and checking for evert row and col
    for (let col = 0; col < board.length; col++) {
        // place the queen if its safe
        if(isSafe(board, row, col)){
            board[row][col] = true;
            count += queensGame(board, row + 1);
            board[row][col] = false;
        }
        
    }

    return count;

}


function isSafe(board, row, col){
    // check vertical board
    for (let i = 0; i < row; i++) {
        if(board[i][col]){
            return false;
        }   
    }

     // diagonal left

    let maxLeft = Math.min(row, col);
     for (let i = 1; i <= maxLeft; i++) {
         if(board[row - i][col - i]){
             return false;
         }
     }

     // diagonal right
     let maxRight = Math.min(row, board.length - col - 1);
     for (let j = 1; j <= maxRight; j++) {
         if(board[row - j][col + j]){
             return false;
         }
     }

     return true;
}


function display(board){
    for (const row of board) {
        for (const row1 of row) {
            if(row1){
                console.log("Q ");
            }else{
                console.log("X  ");
            }
        }
    }
}


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
let boards = create2DArray(4,4);
console.log(boards);
// display(boards);
console.log(queensGame(boards,0));
// Recurance Relation :` N * T(N - 1) + O(n)^2
// O(n^3 + n!) = O(N!)