// word Search : Input : Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: True


function searchWord(board,target){
    const m = board.length;
    const n = board[0].length;
    const visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }

    function dfs(row,col,idx){
        if(idx === target.length){
            return true;
        }

        if(row < 0 || col < 0 || row >= m || col >= n || visited[row][col] || board[row][col] !== target[idx]){
            return false;
        }

        visited[row][col] = true;

        const res = dfs(row - 1, col , idx + 1) ||
        dfs(row + 1, col , idx + 1) || dfs(row, col - 1 , idx + 1) ||
        dfs(row , col + 1, idx + 1);
        visited[row][col] = false;

        return res;



    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(board[i][j] == target[0] && dfs(i,j,0)){
                return true;
            }
        }
    }

    return false;
}


let testBoard = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(searchWord(testBoard, "ABCCEDFF"));