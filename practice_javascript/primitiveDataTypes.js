// 
console.log(1 + "2");
console.log(1 + 3 + "2");
console.log(1 + 3 + "2" + 4 + 4);

!!10; // true
!!{}; // true
!!""; // false
!!0; // false

let str = 'abhay';

// for (let i = 0; i < str.length; i++) {

//     console.log(str[i]);
// }

// for (const st of str) {
//     console.log(st);
    
// }

// for(let first in str) {
//     console.log(str[first]);
// }

// let symBId = Symbol('id');

// console.log(symBId);

// let sd = Symbol.for('username');

// console.log(Symbol.keyFor(sd));


// let map = new Map();

// let objKey = { name: "John" };
// map.set(objKey, "value associated with John");

// console.log(map.get(objKey)); // Output: value associated with John

// // Map keeps a strong reference to objKey
// objKey = null; // Even if we set objKey to null, the key-value pair still exists in the map

// console.log(map.get({ name: "John" })); // Output: false
// console.log(map.size);

let weakMap = new WeakMap();

let objKey1 = { name: "John" };
weakMap.set(objKey1, "value associated with John");

console.log(weakMap.get(objKey1)); // Output: value associated with John

// WeakMap holds a weak reference to objKey
objKey1 = null; // If we set objKey to null, the key-value pair can be garbage collected

console.log(weakMap.get({ name: "John" })); // Output: false
// We cannot directly check the size of a WeakMap or iterate over its entries

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// console.log(generateRandomNumber(1, 5000000));

let num = 343439;

function reverseNumber(num) {
    let reversedNum = 0;
    while (num > 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

// console.log(reverseNumber(num));


function ConvertTo24HrFormat(time) {
    let [hours, minutes, seconds] = time.split(':');
    let period = seconds.slice(2);
    seconds = seconds.slice(0, 2);
    if (period === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}:${seconds}`;
}

function truncateStringLimitTo(str, limit) {
    return str.length > limit ? `${str.slice(0, limit)}...` : str;
}

// console.log(truncateStringLimitTo('abhay kumar singh chauhan', 10));
// console.log(truncateStringLimitTo('abhay', 10));

function toCheckNumberOfDaysBwTwoDates(date1, date2) {
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24));
}