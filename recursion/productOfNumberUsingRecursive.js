// product of number qusing recursive

function productOfNumberUsingRe(x,y){
    if( x < y){
        return productOfNumberUsingRe(y, x);
    }

    if(y != 0){
        return (x + productOfNumberUsingRe(x, y - 1));
    } else {
        return 0;
    }
}

console.log(productOfNumberUsingRe(7,4));