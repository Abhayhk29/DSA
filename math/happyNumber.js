function happyNumber(num){
    let newObj = {};

    let sum  = num;

    while (sum !== 1) {
        let newSum = 0;
        sum.toString().split('').forEach(element => {
            newSum += element * element;
        });

        if(newObj[newSum]) return false;
        newObj[newSum] = true;
        sum = newSum;
    }

    return true;
}

console.log(happyNumber(19));
console.log(happyNumber(8));
console.log(happyNumber(88));
console.log(happyNumber(91));