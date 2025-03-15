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