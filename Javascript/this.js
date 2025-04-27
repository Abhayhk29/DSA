
// Invocation : executing the code
// context of an invocation is the value of this whitin the function
// Scope : of a function is the set of variable and functions accessible within a function body

// function invocation: alert('Hello World!')
// method invocation: console.log('Hello World!')
// constructor invocation: new RegExp('\\d')
// indirect invocation: alert.call(undefined, 'Hello World!')


function task(){
    console.log("chant and be happy");
}

// function invocation
// const ta = task();

// this is the global object in a function invocation 


function sum(a,b){
    console.log(this === window);
    this.myNumber = 20;
    return a + b;
}

// console.log(sum(12,34))

// console.log(window.myNumber);

// this is undefined in a function invocation in strict mode

function myFunc(a,b){
    'use strict';
    console.log(this === undefined);
    return a * b;

}

// myFunc(23,43);

const numbers = {
    numberA: 23,
    numberB: 19,
    
    sum: function(){
        console.log(this === numbers);
        // 'use strict'
        function calculate(){
            console.log(this === numbers)
            console.log(window)
            return this.numberA + this.numberB;
        }

        return calculate.call(this);
    }

}

const numbsers2 = {
    numberA: 23,
    numberB: 19,
    
    sum: function(){
        console.log(this === numbers);
        // 'use strict'
        const calculate = () =>{
            console.log(this === numbers)
            console.log(window)
            return this.numberA + this.numberB;
        }

        return calculate();
    }
}

// console.log(numbers.sum());
// console.log(numbsers2.sum());

// method invocation 
// this is the object that owns the method in a method invocation

// 

const calc = {
    num:0,
    increment(){
        console.log(this === calc);
        this.num += 1;
        return this.num;
    }
}

// console.log(calc.increment())
// console.log(calc.increment())

const myDog = Object.create({
    sayName(){
        console.log(this === myDog);
        return this.name;
    }
})

// myDog.name = 'Jacky';

// console.log(myDog.sayName())

class Planet{
    constructor(name){
        this.name = name;
    }

    getName(){
        console.log(this === earth);
        return this.name;
    }
}

// const earth = new Planet('Earth')
// console.log(earth.getName())
// const mars = new Planet('Mars')
// console.log(mars.getName())

// 3.2. Pitfall: separating method from its object

function Pet(type, legs){
    this.type = type;
    this.legs = legs;

    this.logInfo = function(){
        console.log(this === myCat);
        console.log(`The ${this.type} has ${this.legs} legs`);
    }

    this.logInfo2 = () => {
        console.log(this === myCat);
        console.log(`The arrow ${this.type} has ${this.legs} legs`);
    }
}

const myCat = new Pet('Cat', 4);
// const myCat = new Pet('Cat', 4);
// setTimeout(myCat.logInfo2, 3000)
// setTimeout(myCat.logInfo.bind({type:'Cat', legs: 4}), 1000)

const boundLoGInfo = myCat.logInfo.bind(myCat);

// setTimeout(boundLoGInfo, 2000)


// Constructor Invocation

function Country(name, traveled){
    this.name = name ? name : 'Bharat';
    this.traveled = Boolean(traveled);
}

Country.prototype.travel = function(){
    this.traveled = true;
}

function vechile(type, wheelCount){

    if(!(this instanceof vechile)){
        throw Error('Error: Incorrect invocation');
    }

    this.type = type;
    this.wheelCount = wheelCount;
    return this;
}

const car = new vechile('Car', 4);

// console.log(car === window)


function sumPrac(num1 , num2){
    return num1 + num2;
}


// console.log(sumPrac.call(undefined,10,2))
// console.log(sumPrac.apply(undefined,[10,2]))

const numbersThis = {
    array : [12,34,56,56],

    getNumbers(){
        return this.array;
    }
}


const boundNumber = numbersThis.getNumbers.bind({array: [23,34,45]});
// console.log(boundNumber())

// this in arrow function

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    log(){
        console.log(this === myPoint);
        setTimeout(()=> {
            console.log(this === myPoint);
            console.log(this.x + ':' + this.y)
        },1000)
        setTimeout(function(){
            console.log(this === myPoint);
            console.log(this.x + ':' + this.y)
        },1000)
    }
}


// const myPoint = new Point(95,165);
// myPoint.log();

const onbJectPract = {
    name :'abhay',
    printName : function(){
        return this.name;
    },
    printNameA : () => {
        return this.name;
    }
}


console.log(onbJectPract.printName())
console.log(onbJectPract.printNameA())

// Regular vs arrow function

function myFunction(){
    console.log(this)
}

myFunction()

const myObj = {
    /**
     * 
     */
    method() {
        console.log(this)
    }
}

myObj.method();