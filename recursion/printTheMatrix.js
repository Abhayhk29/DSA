
function mazePathObstaclesPrintMatrix(p,boolArr, r,c,path, steps){
    if(r == boolArr.length - 1 && c == boolArr[0].length- 1){
        path[r][c] = steps;
        console.log('---------------------');  
        console.log(p);
        for (let i = 0; i < path.length; i++) {
            console.log(path[i])
        }
        // console.log(path);
        console.log('---------------------');
        
        return;   
   }

//    console.log('---------------------');
//    console.log(r);
//    console.log(c);
//    console.log('---------------------');
   if(!boolArr[r][c]){
    return;
   }

   boolArr[r][c] = false;
   path[r][c] = steps;

   if(r < boolArr.length - 1){
       mazePathObstaclesPrintMatrix(p+'D', boolArr, r + 1, c,path, steps + 1)
   }

   if(c < boolArr[0].length - 1){
       mazePathObstaclesPrintMatrix(p+'R', boolArr, r, c + 1,path, steps + 1)
   }

    if( r > 0){
        mazePathObstaclesPrintMatrix(p+'U', boolArr, r - 1, c,path, steps + 1)
    }

    if( c > 0){
        mazePathObstaclesPrintMatrix(p+'L', boolArr, r, c - 1,path, steps + 1)
    }

    // this line is where the function will over
    // so before the function gets removes, also remove the 
    // the changes that were made by earlier
    boolArr[r][c] = true;
    path[r][c] = '';
}


let newAmaze = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
];

let path = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

// console.log(newAmaze.length);
// console.log(newAmaze[0]);
// let path = new Array([newAmaze.length][newAmaze[0].length]);
// console.log(path);
console.log(mazePathObstaclesPrintMatrix('',newAmaze, 0, 0, path , 1));