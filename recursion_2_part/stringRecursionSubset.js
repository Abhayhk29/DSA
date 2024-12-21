// remove all the a from the string;

function removeString(str,ans,target){
    // console.log(str);
    // console.log(ans);
    if(str.length == 0){
        return ans;
    }

    let ch = str.charAt(0);
    // console.log(ch);
    // console.log(target);

    if (ch ==  target){
        removeString(str.substring(1), ans, target)
    }else{
        removeString(str.substring(1), ans + ch, target);
    }
}

function removeStringReturn(str,target){
    // console.log(str);
    // console.log(ans);
    if(str.length == 0){
        return '';
    }

    let ch = str.charAt(0);
    // console.log(ch);
    // console.log(target);

    if (ch ==  target){
        return removeStringReturn(str.substring(1),target)
    }else{
        return ch + removeStringReturn(str.substring(1), target);
    }
}
// console.log(removeStringReturn('abhadafdgahjk','a'));

function removeSpecificWordReturn(str,target){
    // console.log(str);
    // console.log(ans);
    if(str.length == 0){
        return '';
    }

    // let ch = ;
    // console.log(ch);
    // console.log(target);

    if (str.startsWith(target)){
        return removeSpecificWordReturn(str.replace(target,''),target)
    }else{
        return str.charAt(0) + removeSpecificWordReturn(str.substring(1), target);
    }
}

console.log(removeSpecificWordReturn("indiaisdevelopingcountry", 'developing'));


function removeSpecificWordReturnNot(str,target){
    // console.log(str);
    // console.log(ans);
    if(str.length == 0){
        return '';
    }

    // let ch = ;
    // console.log(ch);
    // console.log(target);

    if (str.startsWith(target) && !str.startsWith('developing')){
        return removeSpecificWordReturnNot(str.replace(target,''),target)
    }else{
        return str.charAt(0) + removeSpecificWordReturnNot(str.substring(1), target);
    }
}

console.log(removeSpecificWordReturnNot("indiaisdevelopingcountry", 'develop'));