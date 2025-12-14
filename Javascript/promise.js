// new Promise((resolve) => {
//     resolve(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         })
//     )
// })

// new Promise((resolve) => {
//     console.log("in the resolve")
//     setTimeout(() => {
//         console.log("in the setTimeout")
//     },1000)
//     resolve(2);
// })

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);

//   fullfilment handler and rejection handler

// let promise = new Promise(function(resolve,reject) {
//     setTimeout(() => reject(new Error("ohh")),1000);
// })

// let promise1 = new Promise((resolve, reject) => {
//     resolve('done');

//     reject("new Error");
//     setTimeout(() => { resolve("in the resolve")},0)
// })

// let promise3 = new Promise(function(resolve, reject) {
//   // not taking our time to do the job
//   resolve(123); // immediately give the result: 123
// });

// promise3.then((res) => {
//     console.log(res);
// })

// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Ohh Krishna")),1000)
// })

// promise4.then(
//     result => alert(result),
//     error => alert(error)
// ).catch(() => {
//     alert('in the catch')
// }).finally(() =>{
//     alert("finally it completed")
// })

// function delay(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// delay(3000).then(() =>  alert("runs after 3 seconds"))

// new Promise((resolve, reject ) => {
//     setTimeout(() => resolve(1), 1000);
// }).then((res,error) => {
//     alert(res);
//     return res * 2;
// }).then((res) => {
//     alert(res);
//     return res * 4
// }).then((res) => {
//     alert(res);
// })

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((res) => {
//     return res.json()
// }).then(user => fetch('https://api.github.com/users/abhayhk29').then((data) => {
//     return data.json();
// }).then((resData) => {
//     console.log(resData);
//     let img = document.createElement('img');
//     img.src = resData.avatar_url;
//     document.body.append(img);
//     setTimeout(() => {
//         img.remove()
//     },5000)
// }))

// fetch("https://chantandererbehappy.com")
// .then((res) => res.json())
// .then((res)=>{
//     console.log(res)
// }).catch(err => alert(err));

// new Promise((resolve,reject) => {
//     throw new Error("ohh Krishna")
// }).catch((function(err){
//     alert("The error is handelled")
// })).then(() => alert("next handlere"))

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1),3000)),
//     new Promise(resolve => setTimeout(() => resolve(2),2000)),
//     new Promise(resolve => setTimeout(() => resolve(3),1000)),
// ]).then(alert)

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 3000);
//   }),
//   2,
//   3,
// ]).then(alert);

// Promise.all([1, 2, 3]).then(alert);

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];

// Promise.allSettled(urls.map(urk => fetch(urk))).then(result => {
//     console.log(result);
//     console.log(result[0].value);
// })

// pollyfill for the all Settled
// const rejectHandler = reason => ({reason, status : 'rejected'});
//     const resolveHandler = value => ({status: 'fulfilled', value });

// Promise.myPollyfill = function(promises){
//     const convertedPromise = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler))
//     return Promise.all(convertedPromise);
// }

// Promise.myPollyfill(urls.map(urk => fetch(urk))).then(result => {
//     console.log(result);
//     console.log(result[0].value);
// })

// promise race

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh2")),1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh4")),3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh3")),4000)),
// ]).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// })

// promise any : return first full filled promise and get its result. If all the promise is
// rejected it return aggregated rejected error
// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh2")),1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh4")),3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("ohhh3")),4000)),
// ]).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// })

// let cache = new Map();

// function loadCached(url){
//     if(cache.has(url)){
//         return Promise.resolve((cache.get(url)));
//     }

//     return fetch(url).then(response => response.text()).then((text)=> {
//         cache.set(url,text);
//         return cache
//     })
// }

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// usage:
// loadScript('path/script.js', (err, script) => {...})

// let loadScriptPr = function(src){
//     return new Promise((rsolve, reject)=>{
//         loadScript(src,(err,script) => {
//             if(err) reject(err);
//             else resolve(script)
//         })
//     })
// }

// async function f(){
//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve('done'));
//     })

//     let result = await promise;
//     alert(result);
// }

// f().then((res) => {
//     console.log(res);
// })

// async function ShowAvatar(){
//     let response = await fetch("")
// }

// class Thenable{
//     constructor(num){
//         this.num = num;
//     }

//     then(resolve,reject){
//         alert(resolve);

//         setTimeout(() => resolve(this.num *67),1000);
//     }
// }

// async function f() {
//     let result = await new Thenable(3.8);
//     console.log(result)
//     alert(result)
// }

// f();

// class Wait{
//     async sleep(){
//         return await Promise.resolve(1);
//     }
// }

// new Wait().sleep().then(alert);

// async function test(){
//     try {
//         let response = await fetch("https://no-url.com");
//     } catch (error) {
//         alert(error)
//     }
// }

// test()

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// async function loadJson(url) {
//     let res = await fetch(url);
//     if (res.status === 200) {
//       return await res.json();
//     }
//     throw new Error(res.status);
// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404


// async function wait(){
//     await new Promise(resolve => setTimeout(resolve,1000) )

//     return 10;
// }


// function f(){
//     wait().then(result => alert(result));
// }

// f()

// let database;

// function connect() {
//   database = {
//     async query(isOk) {
//       if (!isOk) throw new Error('Query failed');
//     }
//   };
// }

// function disconnect() {
//   database = null;
// }


// function delay(fn, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => fn().then(resolve, reject), ms);
//   });
// }

// async function run() {
//   connect();

//   try {
//     await Promise.all([
//       // these 3 parallel jobs take different time: 100, 200 and 300 ms
//       // we use the `delay` helper to achieve this effect
//       delay(() => database.query(true), 100),
//       delay(() => database.query(false), 200),
//       delay(() => database.query(false), 300)
//     ]);
//   } catch(error) {
//     console.log('Error handled (or was it?)');
//   }

//   disconnect();
// }

// run();


function customPromiseAllWait(promises){
    return new Promise((resolve,reject) => {
        const result = new Array(promises.length);
        let settledCount = 0;
        let firstError = null;

        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(result => {
                result[index] = result;
            })
            .catch(error => {
                if(firstError === null){
                    firstError = error
                }
            }).finally(() => {
                settledCount++;
                if(settledCount === promises.length){
                    if(firstError !== null){
                        reject(firstError)
                    }else{
                        resolve(result)
                    }
                }
            })
        })
    })
}

function allOrAggregator(promises){
    return Promise.allSettled(promises).then(results => {
        const errors = [];
        const values = [];

        results.forEach((res,i) => {
            if(res.status === 'fulfilled'){
                values[i] = res.value;
            }else{
                errors.push(res.reason)
            }
        })

        if(errors.length > 0){
            throw new AggregateError(errors, 'One or more API has failed')
        }

        return values;
    })
}