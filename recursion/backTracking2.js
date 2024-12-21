// maze with obstacles
// do not move to the path back
// moving back restore the maze
// backtracking redoing the thing we have done early
// changes previous re do it
// make the changes and reverse the change when task is done is called backtracking
function mazePathObstaclesUpAndDown(p,boolArr, r,c){
    if(r == boolArr.length - 1 && c == boolArr[0].length- 1){
        console.log(p);
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

   if(r < boolArr.length - 1){
       mazePathObstaclesUpAndDown(p+'D', boolArr, r + 1, c)
   }

   if(c < boolArr[0].length - 1){
       mazePathObstaclesUpAndDown(p+'R', boolArr, r, c + 1)
   }

    if( r > 0){
        mazePathObstaclesUpAndDown(p+'U', boolArr, r - 1, c)
    }

    if( c > 0){
        mazePathObstacles(p+'L', boolArr, r, c - 1)
    }

    // this line is where the function will over
    // so before the function gets removes, also remove the 
    // the changes that were made by earlier
    boolArr[r][c] = true;
}


let newAmaze = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
];

// console.log(newAmaze.length);
// console.log(newAmaze[0]);

console.log(mazePathObstaclesUpAndDown('',newAmaze, 0, 0));