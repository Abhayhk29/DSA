let input = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]];
// 1 is a free call that rat can go
// 0 : blocked
let n = input.length - 1;
console.log(input.length - 1);
let pathObj = {
    L : {x:0,y:-1},
    U:  {x:-1,y:0},
    R:  {x:0,y:1},
    D:  {x:1, y:0}
}

function isSolved(x,y,n){
    return x == n - 1 && y == n - 1;
}

function isValid(x,y,n, arr){
    return x >= 0 && x < n && y >= 0 && y < n && arr[x][y] == 1;
}

function solveRate(x,y, n, res, path, arr, choices){
    if(isSolved(x,y,n)){
        console.log(path);
        res.result.push(path);
        return;
    }

    for (const item in choices) {
        let newX = x + choices[item].x;
        let newY = y + choices[item].y;

        if(isValid(newX, newY, n ,arr)){
            arr[x][y] = 0;
            path.pa.push(item);
            console.log(path);
            solveRate(newX, newY, n , res, path, arr, choices);
            arr[x][y] = 1;
            path.pa.pop();
        }
    }
}


let res = {result:[]};
let path = {pa:[]};

console.log(solveRate(0,0,n,res,path,input, pathObj))

console.log(res)