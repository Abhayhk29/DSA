// skip the string using recursion

function escapeString(str, unProcessed){
    if(unProcessed.length == 0){
        console.log(str);
        return;
    }

    let character = unProcessed.charAt(0);

    if(character == 'a'){
        escapeString(str,unProcessed.substring(1));
    } else {
        escapeString(str + character,unProcessed.substring(1));
    }
}

function escapeStringWithReturnString(unProcessed){
    if(unProcessed.length == 0){
        return '';
    }

    let character = unProcessed.charAt(0);

    if(character == 'a'){
        return escapeStringWithReturnString(unProcessed.substring(1));
    } else {
        return  character + escapeStringWithReturnString(unProcessed.substring(1));
    }
}

function skipSpeciffic(unProcessed){
    // skip abhay
    if(unProcessed.length == 0){
        return '';
    }

    if(unProcessed.startsWith('abhay')){
        return skipSpeciffic(unProcessed.substring(5));
    }else{
        return  unProcessed.charAt(0) + skipSpeciffic(unProcessed.substring(1));
    }
}

function skipAbhSpeciffic(unProcessed){
    // skip abhay
    if(unProcessed.length == 0){
        return '';
    }

    if(unProcessed.startsWith('abh') && !unProcessed.startsWith('abhay')){
        return skipAbhSpeciffic(unProcessed.substring(3));
    }else{
        return  unProcessed.charAt(0) + skipAbhSpeciffic(unProcessed.substring(1));
    }
}

console.log(skipAbhSpeciffic('baacabhkayadgfd'));
