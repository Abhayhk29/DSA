// let ascc

function subSetSc2(p, up){
    if(up.length == 0){
        console.log(p);
        return '';
    }

    let ch = up.charAt(0);

    subSetSc2(p+ch, up.substring(1))
    subSetSc2(p, up.substring(1))
    subSetSc2(p + ch.charCodeAt(), up.substring(1))
}


function subSetItterative(arr){
    let output = [[]];

    for (const i of arr) {
        let outputLen = output.length;
        for (let j = 0; j < outputLen; j++) {
            let inte = output[j].slice();
            inte.push(i);
            output.push(inte);
        }
    }
    return output;
}

// console.log(subSetItterative([1,2,3]));

function subsequenceWithDuplicateElement(arr){
    arr.sort();
    let output = [[]];
    let start = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        start = 0;
        if(i > 0 && arr[i] == arr[i - 1]){
            start = end + 1;
        }
        end = output.length - 1;
        let outputLen = output.length;
        for (let j = start; j < outputLen; j++) {
            let inte = output[j].slice();
            inte.push(arr[i]);
            output.push(inte);
        }
    }
    return output;
}

console.log(subsequenceWithDuplicateElement([2,1,2]));