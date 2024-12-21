// example : 'abc'

function permutationRec(p,up){
    if(up.length === 0){
        console.log(p);
        return;
    }

    let ch = up.charAt(0);

    for (let i = 0; i <= p.length; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i, p.length);
        permutationRec(f + ch + s, up.substring(1));
    }
}

// permutationRec('', 'abc');

function permutationsRecArr(p, up){
    if(up.length === 0){
        let ar = [];
        ar.push(p);
        return ar;
    }

    let output = [];
    let ch = up.charAt(0);

    for (let i = 0; i <= p.length; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i, p.length);
        output.push(permutationsRecArr(f + ch + s, up.substring(1)));
    }

    return output.flat();
}

function permutationsRecArrount(p, up){
    if(up.length === 0){
        return 1;
    }

    let output = [];
    let ch = up.charAt(0);
    let count  = 0;
    for (let i = 0; i <= p.length; i++) {
        let f = p.substring(0,i);
        let s = p.substring(i, p.length);
        count  = count + permutationsRecArrount(f + ch + s, up.substring(1));
    }

    return count;
}

console.log(permutationsRecArrount('','abcd'));