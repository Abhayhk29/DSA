// example [a,b,c]

function permutationRec(p,unprocessed){
    if(unprocessed.length == 0){
        console.log(p);
        return;
    }

    let ch = unprocessed.charAt(0);

    for (let i = 0; i < p.length + 1; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i,p.length);
        permutationRec(f + ch + s, unprocessed.substring(1))
    }

}

function permutationRecArr(p,unprocessed){
    if(unprocessed.length == 0){
        let list = new Array();
        list.push(p);
        return list;
    }

    let ch = unprocessed.charAt(0);

    let newArr = [];

    for (let i = 0; i < p.length + 1; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i,p.length);
        newArr.push(permutationRecArr(f + ch + s, unprocessed.substring(1)));
    }

    return newArr.flat();

}

function permutationRecCount(p,unprocessed){
    if(unprocessed.length == 0){
        return 1;
    }

    let ch = unprocessed.charAt(0);
    let count  = 0;
    for (let i = 0; i < p.length + 1; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i,p.length);
        count = count + permutationRecCount(f + ch + s, unprocessed.substring(1))
    }

    return count;

}

console.log(permutationRec('','abcdef'));