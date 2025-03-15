const arr = [1,2,3,4,5,6,7,8,9,10];
const postion = 5;

const count = 3;

arr.splice(postion, count);
console.log(arr)
arr.splice(postion, 0, 11, 12, 13);
console.log(arr)


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