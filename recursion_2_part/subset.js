// permutation and Combination 
// adjacent collection 


function subSet(p, up){
    if(up.length == 0){
        console.log(p);
        return '';
    }

    let ch = up.charAt(0);

    subSet(p+ch, up.substring(1))
    subSet(p, up.substring(1))
}

function subSetArr(p, up, arr){
    if(up.length == 0){
        return arr.push(p);
    }

    let ch = up.charAt(0);

    subSetArr(p+ch, up.substring(1), arr)
    subSetArr(p, up.substring(1), arr)
    return arr;
}


function subSetWithArr(p, up){
    if(up.length == 0){
        // console.log(p);
        return [p];
    }

    let ch = up.charAt(0);

    let left = subSetWithArr(p+ch, up.substring(1))
    let right = subSetWithArr(p, up.substring(1))

    return [...left, ...right];
}

console.log(subSetWithArr('', 'abc', []));