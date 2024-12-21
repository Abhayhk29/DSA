// Input : exp = “[()]{}{[()()]()}”
// outPut : true

function checkValidParenthesis(exp, count){
    if(count == 0 && exp.length == 0){
        return true;
    }

    if(exp.length == 0 && count != 0){
        return false;
    }

    count += checkParenthesis(exp[0]);

    return checkValidParenthesis(exp.substring(1),count);
}

function checkParenthesis(str){
    if(str == '[' || str == '(' || str == '{'){
        return 1;
    } else {
        return -1
    }
}

console.log(checkValidParenthesis('[()]{}{[()()]()}',0));