// subset example [a,b,c] => [a,ab,ac,b,bc,c,ac,bc,abc]
// taking some element and removing some element this called subset method
function subSequence(str,upStr){
    if(upStr.length == 0){
        console.log(`${str} ', '`);
        return;
    }


    let cha = upStr.charAt(0);

    subSequence(str + cha , upStr.substring(1));
    subSequence(str , upStr.substring(1));
}

// output as array
function subSequenceArray(str,upStr){
    if(upStr.length == 0){
        let list = new Array();
        list.push(str);
        return list;
    }


    let cha = upStr.charAt(0);

    let new1 = subSequenceArray(str + cha , upStr.substring(1));
    let new2 = subSequenceArray(str , upStr.substring(1));

    new1.push(new2);

    return new1.flat();
}


function subSequenceWithAscii(str,upStr){
    if(upStr.length == 0){
        console.log(`${str}`);
        return;
    }


    let cha = upStr.charAt(0);

    subSequenceWithAscii(str + cha , upStr.substring(1));
    subSequenceWithAscii(str , upStr.substring(1));
    // console.log(str);
    let n = cha.length == 0 ? cha : cha.charCodeAt(0);
    subSequenceWithAscii(str + n , upStr.substring(1));
}

function subsetInterative(arr){
    let newArray = [[]];
    for (const key in arr) {
        let n = newArray.length;
        let currentNumber = arr[key];
        for (let i = 0; i < n; i++) {
            let currentSubset = newArray[i];
            newArray.push(currentSubset.concat(currentNumber));
        }
    }
    return newArray;
}

function subsetInterativeDuplicate(arr){
    let newArray = [[]];
    arr.sort();
    console.log(arr);
    let start = 0;
    let end = 0;
    for (const key in arr) {
        start = 0;
        // if my curreent andprevious is same start = end + 1'
        if(key > 0 && arr[key] == arr[key - 1]){
            start = end + 1;
        }
        end = newArray.length - 1;
        let n = newArray.length;
        let currentNumber = arr[key];
        for (let i = start; i < n; i++) {
            let currentSubset = newArray[i];
            newArray.push(currentSubset.concat(currentNumber));
        }
    }
    return newArray;
}


    
    console.log(subSequence('','abc'));