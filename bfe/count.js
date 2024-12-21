const count  = (() => {
    let count = 0;

    increment = () => count += 1;
    increment.reset = () => count = 0;
    return increment;
})()


console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment.reset())
// count.increment()
// count.increment()
// count();
// let newFunc = new mainFunction();
// console.log(newFunc.countNumber());