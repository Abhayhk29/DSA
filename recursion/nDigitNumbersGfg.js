// input : 1
// output: 0,1,2,3,4,5,6,7,8,9
// Input : 2
// output : 12, 13 ,14 ,15 ,16 ,17y,18,19,23
function PrintDigitWithIncreasing(n){
    
    function print(start, n, str){
        // console.log(start);
        // return;
        if(str.length >= n){
            console.log(str);
            return;
        }
        for (let i = start; i <= 9; i++) {
            str = str.concat(i);
            print(i+1,n,str);
            if(str.length == 1){
                str = '';
            } else {
                let int = str.indexOf(i);
                str = str.slice(0,int);
            }
            // str.substring(i);
        }
    }
    print(n > 1 ? 1 : 0, n,'');
}

PrintDigitWithIncreasing(3);
