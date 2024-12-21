function printInPattern(row,c){
    if(row == 0){
        return;
    }

    if(c < row){
        printInPattern(row, c+1);
        console.log('*');
    }else{
        printInPattern(row-1,0);
        console.log('/n');
    }
}

console.log(printInPattern(4,0));