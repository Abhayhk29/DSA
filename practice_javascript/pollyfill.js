const obj = {
    name: 'abhay',
    age: 25
};


function displayThisValue(mesage){
    console.log(`${mesage} ${this.name}`);
}

// displayThisValue.call(obj, 'hello');

Function.prototype.myCall = function(context, ...args){
    context = context || window;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
}


displayThisValue.myCall(obj, 'hello My Call');

// -----------------------------------`apply` polyfill-----------------------------------

function greet(message1, message2){
    console.log(`${message1} ${this.name} ${message2}`);
}

// greet.apply(obj, ['hello', 'welcome']);


Function.prototype.myApply = function(context, args){
    context = context || window;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
}

Function.prototype.myApply1 = function(context, args){
    if(context === null || context === undefined){
        context = typeof window !== 'undefined' ? window : global;
    }

    if (typeof context !== 'object') {
        context = object(context);
    }

    args = args || [];

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
}

// greet.myApply(obj, ['hello', 'welcome']);
// greet.myApply1(obj, ['hello', 'welcome']);

// -----------------------------------`bind` polyfill-----------------------------------

function greetBind(message1, message2){
    console.log(`${message1} ${this.name} ${message2}`);
}

const greetBinded = greetBind.bind(obj, 'hello_bind');
greetBinded('welcome_bind');


Function.prototype.myBind = function(context, ...args){
    const OriginalContext = this;

    return function(...innerArgs){
        OriginalContext.apply(context, [...args, ...innerArgs]);
    }
}


const Greet2 = greetBind.myBind(obj, 'hello_bind_pollify');
Greet2('welcome_bind_pollify');

// ---------------------------------------------.map POLYFILL---------------------------------------------

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => item * 2);

console.log(newArr);

Array.prototype.myMap = function(callback){ 
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
}
