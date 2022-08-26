// gcd with Recursiond
function recursionGcd(a,b){

    // if (a == 0)
    // return b;
    // if (b == 0)
    // return a;

    if(a == b){
        return a;
    }

    if(a > b){
       return  recursion(a -b,b);
    }else{
       return  recursion(a,b-a);
    }
}


function recursionSimple(a,b){
    let result = Math.min(a,b);

    while(result > 0){
        if(a % result == 0 && b % result == 0){
            break;
        }
        result--;
    }
    return result;
}


console.log(recursionSimple(9,6));