function powerOfNumber(n){
    if(n === 1){
        return true;
    }
    function checkPower(num, myVal){
        myVal = myVal * 2;

        if(myVal === num) return true;

        if(myVal > n) return false;

        return checkPower(num, myVal++);
    }

    return checkPower(n, 1);
}


function powerOfThree(n){
    if(n == 1){
        return false;
    }
    function checkPowerThree(num, myVal){
        myVal = myVal * 3;

        if(myVal === num) return true;

        if(myVal > n) return false;

        return checkPowerThree(num, myVal++);
    }

    return checkPowerThree(n, 1);
}

function powerOfFour(n){
    if(n == 1){
        return false;
    }
    function checkPowerFours(num, myVal){
        myVal = myVal * 4;

        if(myVal === num) return true;

        if(myVal > n) return false;

        return checkPowerFours(num, myVal++);
    }

    return checkPowerFours(n, 1);
}

console.log(powerOfFour(64));