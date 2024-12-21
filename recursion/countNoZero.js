let totalNumberOfZero = 0;

function calculateZero(n,a){
    if(n == 0){
        return a;
    }

    let rem = n % 10;
    if(rem == 0){
        return calculateZero(Math.floor(n / 10) , a+=1);
    }

    return calculateZero(Math.floor(n / 10) , a);
}

console.log(calculateZero(3210,0));