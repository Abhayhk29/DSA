const arr = [1,2,3,4,5,6,7,8,9,10];
const postion = 5;

const count = 3;

arr.splice(postion, count);
// console.log(arr)
arr.splice(postion, 0, 11, 12, 13);
// console.log(arr)


// Asynchrouniys''

// function setTimeoutPromise(delay){
//     function resolver(resolve){
//         setTimeout(resolve,delay);
//     }
//     return new Promise(resolver)
// }

// console.log("task started")
// const timeoutPromise = setTimeoutPromise(3000);
// timeoutPromise.then(() => { console.log("chant and be happy") })


// function* generatorFunc(paaram){
//     const nu1 = yield;
//     const num2 = yield;

//     return nu1 + num2;
// }

// const it = generatorFunc();
// it.next();
// it.next(10);
// it.next(20);
// let sum = it.next();
// console.log(sum.value);
// // console.log(it.next().value);

function* generatorFunc(param) {
    const num1 = yield;
    const num2 = yield;
    return num1 + num2;
  }
  // driver code
  const it = generatorFunc();
  it.next(); // { value: undefined, done: false}
  it.next(3); // { value: undefined, done: false}
  const sum = it.next(5); // { value: 8, done: true }
  sum.value; // 8


  const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
  ];


  books.sort((a, b) => {
    const authorNameA = a.author.split(" ")[1];
    const authorNameB = b.author.split(" ")[1];
    return authorNameA > authorNameB ? 1 : -1;
  });

  console.log(books);

//   flatAnArray = (arr) => {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatAnArray(val)) : acc.concat(val), [])
//   }

function flat(arr){
    const arrFl = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            arrFl.push(...flat(element));
        }else{
            arrFl.push(element);
        }
    });

    return arrFl;
}

console.log(flat([1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14]]]]]]]));


// execute it after 2 secong

function displayNamr(){
    console.log('abhay')
}

function executeAfterTwoSecond(fn){
    if(typeof fn === 'function'){
        setTimeout(() => {
            console.log("I am executing after 2 seconds");
            fn();
        }, 2000);
    }else {
        console.log("not a function")
    }
}

console.log(executeAfterTwoSecond(displayNamr));
console.log(executeAfterTwoSecond('abhay'));


function timer(init = 0, step = 1){
    var interNalId;
    var count = init;

    function startTimer(){
        interNalId = setInterval(() => {
            count += step;
            console.log(count);
        }, 1000);
    }

    function stopTimer(){
        clearInterval(interNalId);
        interNalId = null;
    }

    return {
        startTimer,
        stopTimer
    }
}

const timer1 = timer(0, 2);

timer1.startTimer();
setTimeout(() => {
    timer1.stopTimer();
}, 10000);