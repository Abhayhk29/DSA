// maze with obstacles
function mazePathObstacles(p,boolArr, r,c){
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

   if(r < boolArr.length - 1){
       mazePathObstacles(p+'D', boolArr, r + 1, c)
   }

   if(c < boolArr[0].length - 1){
       mazePathObstacles(p+'R', boolArr, r, c + 1)
   }
}



let newAmaze = [
    [true, true, true],
    [true, false, true],
    [true, true, true],
];

// console.log(newAmaze.length);
// console.log(newAmaze[0]);

console.log(mazePathObstacles('',newAmaze, 0, 0));