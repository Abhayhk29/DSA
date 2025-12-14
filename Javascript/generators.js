// Generator Function can return multiple values.
// yields

function* generateSequenc(){
    yield 1;
    yield 2;
    return 3;
}

let generate = generateSequenc();

console.log([0,...generateSequenc()])
// console.log(generate.next().value)
// console.log(generate.next())
// console.log(generate.next())


for(let value of generate){
    console.log(value)
}

// output will be in this format : let database;

// {
//     "value": 3,
//     "done": true
// }


function* generateSequence(start,end){
    for(let i = start; i <= end; i++) yield i;
}


function* pseudoRandom(seed){
    let val = seed;

    while (true) {
        val = val * 1687 % 2147483647;
        yield val;
    }
}


let gec = pseudoRandom(1);

console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)
console.log(gec.next().value)