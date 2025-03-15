let obj = {
    name: 'abhay',
    addrss: 'bangalore',
    pin: 560068,
    value: 10
}

// for (let key in obj) {
//     console.log(obj.hasOwnProperty(key));
//     if(obj.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// for (const key of Object.keys(obj)) {
//     console.log(key)
// }

function toCheckItIsObjectOrNot(obj) {
    if(obj !== null && typeof obj === 'object' && typeof obj !== 'undefined' && !Array.isArray(obj)){
        return Object.keys(obj).length > 0 && JSON.stringify(obj) !== JSON.stringify({});
    } else {
        return false;
    }
}

const obj1 = {};

Object.defineProperty(obj1, "data", {
    _data : 0,
    get(){
        return this._data;
    },
    set(value){
        this._data = value;
    }

})

obj1.data = 10;
console.log(obj1.data);
// console.log(toCheckItIsObjectOrNot(obj)); // Output: true
// console.log(toCheckItIsObjectOrNot([1,2,3])); // Output: true

class ClassWithPrivateValues {
    #privateValue = 10;
    #privateMethod(){
        return this.#privateValue;
    }
    getPrivateValue(){
        return this.#privateValue;
    }

    setPrivateValue(value){
        this.#privateValue = value;
    }

    getPrivateMethod(){
        return this.#privateMethod();
    }
}

let classWithPrivateValues = new ClassWithPrivateValues();
console.log(classWithPrivateValues.getPrivateValue()); // Output: 10
console.log(classWithPrivateValues.getPrivateMethod()); // Output: SyntaxError: Private field '#privateValue' must be declared in an enclosing class


// let range = {
//     start : 1,
//     end : 10,
// }

// for (let num of range) {
//     console.log(num);
// }

// Example
let range = {
    start: 1,
    end: 10,
  };
   
  for (let i of range) console.log(i); // 1 2 3 4 5 6 7 8 9 10
