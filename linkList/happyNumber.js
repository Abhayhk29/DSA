function isHappy(n){
    let slow = n;
    let fast =n;

    do {
        slow = findSquareOfTheNumber(slow);
        fast = findSquareOfTheNumber(findSquareOfTheNumber(fast));
    } while (slow != fast);

    if(slow == 1){
        return true;
    }

    return false;
}

function findSquareOfTheNumber(n){
    let ans = 0;
    while(n > 0){
        let rem = n % 10;
        ans += rem * rem;
        n = parseInt(n /10);
    }

    return ans;
}


console.log(isHappy(19));