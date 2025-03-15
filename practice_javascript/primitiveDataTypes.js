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