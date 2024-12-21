let obj = {a:null}
let obj1 = {a:undefined}

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj1));

function undefinedToNull(obj){
    if(obj === undefined || obj === null) 
    return null;
    for (const ob in obj) {
        // console.log(ob);
        if(obj[ob] === undefined){
            obj[ob] = null
        } else if (typeof obj[ob] === 'object'){
            undefinedToNull(obj[ob]);
        }
    }

    return obj
}

console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}));
console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}));
