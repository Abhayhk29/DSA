//  PENDING |   FULFILLED | REJECTED
// initial : PENDING


function init(){
    // the execution is excuted right away after promise 
    // constructor invocation
    const executeFn = (resolve, reject) =>{
        resolve(10); // pending => Fullfill
    }

    return new Promise(executeFn);
}

const instace = init();

// than exists on the prototype chain
// of promise instance
console.log(instace)

// .then

// instace.then(v => {
//     console.log("value is : ", v)
//     return  v + 1;
// }).then(v => {
//     console.log("value is : ", v)
// })

instace.then(v => {
    console.log("value is : ", v)
    return new Promise(resolve => {
        setTimeout(() => resolve(v + 1), 5000)
    })
    return  v + 1;
}).then(v => {
    console.log("value is : ", v)
})