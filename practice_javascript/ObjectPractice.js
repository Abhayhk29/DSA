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
// let range = {
//     start: 1,
//     end: 10,
//   };
   
//   for (let i of range) console.log(i); // 1 2 3 4 5 6 7 8 9 10

let objFirst = {
    name: 'abhay',
    city: 'bangalore',
    addrss: 'bangalore',
    pin: 560068,
    value: 10,
    companies:[{
        name: 'TCS',
        location: 'bangalore',
        pin: 560068,
        value: 10
    },{
        name: 'Infosys',
        location: 'bangalore',
        pin: 560068,
        value: 10
    }]
}
let objSecond = {
    name: 'abhay',
    addrss: 'bangalore',
    pin: 560068,
    value: 10,
    companies:[{
        name: 'TCS',
        location: 'bangalore',
        pin: 560068,
        value: 10
    },{
        name: 'Infosys',
        location: 'bangalore',
        pin: 560068,
        value: 10
    }]
}


function compareObjectsDeep(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1) {
        let val1 = obj1[key];
        let val2 = obj2[key];

        let areObjects = val1 instanceof Object && val2 instanceof Object && val1 !== null && val2 !== null;

        if(areObjects && !compareObjectsDeep(val1, val2) || !areObjects && val1 !== val2){
            return false;
        }
    }
    return true;
}


console.log(compareObjectsDeep(objFirst, objSecond)); // Output: true

// Example
let range = {
    start: 10,
    end: 50,
  };
   
//   console.log(25 in range); // false
//   25 in range; // true

const employees = [
    { name: "John", id: "1" },
    { name: "Jane", id: "2" },
    { name: "Pai", id: "0" },
];

const flexEmployees = new Proxy(employees, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
         } else if(typeof prop === 'string'){
            return target.find(employee => employee.name === prop);
        } else {
            return undefined;
        }
    }
});

console.log(flexEmployees[1]); // Output: { name: "Jane", id: "2" }
console.log(flexEmployees["Pai"]); // Output: { name: "Pai", id: "0" }
console.log(flexEmployees["abhay"]); // Output: { name: "Pai", id: "0" }

var circularObj = { prop: 1 };
circularObj.myself = circularObj;

function doesObjectHaveCircularReferences(obj) {
    try {
        JSON.stringify(obj);
        return false;
    } catch (error) {
        return true;
    }
}

console.log(doesObjectHaveCircularReferences(circularObj)); // Output: true