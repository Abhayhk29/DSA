function powerOfSum(x,n,i =1){
    if(x == 0){
        return 1;
    }

    if(x < 0 || Math.pow(i,n) > x){
        return 0;
    }

    return powerOfSum(x - Math.pow(i,n), n , i+ 1) + powerOfSum(x,n, i + 1);
}

console.log(powerOfSum(100,2));