function isPallidrome(str){
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function allPossiblePallidrome(str, temp, index, ans){
    if(index === str.length){
        ans.push([...temp]);
        return;
    }

    let palStr = '';
    for (let i = index; i < str.length; i++) {
        palStr += str[i];
        if(isPallidrome(palStr)){
            temp.push(palStr);
            allPossiblePallidrome(str,temp, i + 1, ans);
            temp.pop();
        }
    }
}

// time compl O(n * 2 ^n - 1);
let ans = [];
let temp = [];
let str = 'aab';
console.log(allPossiblePallidrome(str,temp,0,ans));
console.log(ans);