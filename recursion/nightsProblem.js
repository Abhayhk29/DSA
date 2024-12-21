// n Knights

function knights(boards, row, col, target){
    if(target == 0){
        display(boards);
        console.log("/\n");
        return;
    }

    if(row == boards.length - 1 && col == boards.length){
        return;
    }

    if(col == boards.length){
        knights(boards, row + 1, 0, target);
        return;
    }

    if(isSafe(boards, row, col)){
        boards[row][col] = true;
        knights(boards, row, col + 1, target - 1);
        boards[row][col] = false;
    }

    knights(boards, row, col + 1, target);
}

function isSafe(boards, row, col){
    if(isValid(boards, row - 2, col - 1)){
        if(boards[row - 2][col - 1]){
            return false;
        }
    }

    if(isValid(boards, row - 1, col - 2)){
        if(boards[row - 1][col - 2]){
            return false;
        }
    }

    if(isValid(boards, row - 2, col + 1)){
        if(boards[row - 2][col + 1]){
            return false;
        }
    }

    if(isValid(boards, row - 1, col + 2)){
        if(boards[row - 1][col + 2]){
            return false;
        }
    }

    return true;
}

function isValid(boards, row, col){
    if(row >= 0 && row < boards.length && col >= 0 && col < boards.length ){
        return true;
    }

    return false;
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
console.log(knights(boards,0, 0, 4));