// function fun(){
//     console.log(arguments)
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }


// fun('abhay', 'kumar', 'singh', 'chauhan');

// function practice1(a,b,c){
//     // console.log(practice1.length)
//     // console.log(arguments.length)
//     if(arguments.length === practice1.length){
//         console.log('All arguments are passed')
//     } else {
//         console.log('All arguments are not passed')
//     }
// }

// practice1(1,2,3,4,5,6,7,8,9,10)
// practice1(1,2,3)


// (function IIFE(param1, param2) {
//     console.log("I am an Immediately invoked function");
//     console.log("Parameter 1: " + param1);
//     console.log("Parameter 2: " + typeof param2);
//     console.log("Parameter 2 output: " + param2());
//   })("hello", function () {
//     return "I am a string from a function passed to IIFE";
//   });

// var randomNumber = (function () {
//     return Math.random();
//   })();

// console.log(randomNumber);

function multipleValueReturnFunc() {
    const a = "Java",
      b = "Script";
    return {
      a,
      b,
    };
  }
   
  // driver code
  const { a: x, b: y } = multipleValueReturnFunc(); // x will have 'Java' and y will have 'Script'
  const { a, b } = multipleValueReturnFunc(); // a and b will have respective values

//   console.log(a, b, x, y)

// call, apply, bind
// function displayThisValue(param, param1){
//     console.log(this.value, param, param1)
// }

// const obj = {
//     value: 'abhay'
// }



// displayThisValue.call(obj, 'kumar', 'pandey')

// displayThisValue.apply(obj, ['kumar', 'pandey'])

// // setTimeout(displayThisValue.bind(obj, 'kumar', 'pandey'), 1000)
// setTimeout(displayThisValue, 1000, ...['kumar', 'pandey'])

function Employee(name){
    this.name = name;
}

Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.setName = function(name){
    this.name = name;
}   

const emp = new Employee('abhay');
emp.setName('kumar')
// console.log(emp.getName())


function factoryFunc(username, password, isActive = true, isAdmin = false){ 

    if(!username || !password){
        throw new Error('Username and password are required')
    }
    return {
        username,
        password,
        isActive,
        isAdmin,
    }
}

const user = factoryFunc('abhay', 'kumar', false, true)
console.log(user)


function calCulator(){
    add = function(a,b){
        return a + b;
    }
    subtract = function(a,b){
        return a - b;
    }
    multiply = function(a,b){
        return a * b;
    }
    divide = function(a,b){
        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}

const calc = calCulator();
console.log(calc.add(10,20))

function pollyFillBind(func, context){
    return function(){
        func.apply(context, arguments)
    }
}

function customBind(func, defaultContext) {
    return function(...args) {
        const context = this !== globalThis ? this : defaultContext;
        return func.apply(context, args);
    };
}

// Example usage
const obj1 = { value: 1 };
const obj2 = { value: 2 };

function printValue() {
    console.log(this.value);
}

const boundFunc = customBind(printValue, obj1);

boundFunc(); // Output: 1 (default context is obj1)

boundFunc.call(obj2); // Output: 2 (context overridden to obj2)


function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        } else {
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function sum(a,b,c){
    return a + b + c;
}

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)()) // Output: 6


function throtle(func, limit){
    let lastFunc;
    let lastRun;

    return function(...args){
        const context = this;

        if(!lastRun){
            func.apply(context,args);
            lastRun = Date.now();
        }else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function(){
                if(Date.now() - lastRun >= limit){
                    func.apply(context,args);
                    lastRun = Date.now();
                }
            }, limit - (Date.now() - lastRun))
        }
    }
}


function debounce(func,delay, context){
    let timer;

    return function(...args){
        const context = this ?? context;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay)
    }
}


function sampler(fn, context, count){
    let counter = 0;

    return function(...args){
        // if(counter < count){
        //     counter++;
        //     return fn.apply(context, args)
        // }

        let lastArgs = args
        context = this ?? context;
        if(++counter !== count){
            return;
        }

        fn.apply(context, lastArgs);
        counter = 0;
    }
}

let constNumOfTimes = 3;
function sum(){
    let argds = arguments;

    if(argds.length === constNumOfTimes){
        return Array.from(argds).reduce((acc, curr) => acc + curr, 0);
    }

    return function(){
        return sum(...argds, ...arguments)
    }
}

// console.log(sum(1)(2)(3)) // Output: 6
// console.log(sum(1,2,3)) // Output: 6
// console.log(sum(1,2)(3)) // Output: 6

function sumNumbers(a){
    return function(b){
        if(b){
            return sumNumbers(a+b)
        }
        return a;
    }
}

console.log(sumNumbers(1)(2)(3)(4)())
console.log(sumNumbers(1)(3)())