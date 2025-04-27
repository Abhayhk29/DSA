let result = []
function permute(string, op , arr){
    if(string.length === 0){
        return arr.push(op);
    }
    let obj = new Set();

    for (let i = 0; i < string.length; i++) {
        if(!obj.has(string[i])){
            obj.add(string[i]);
            let st = op + string[i];
            let str = string.substring(0,i) + string.substring(i + 1);
            permute(str,st,arr);
        }
    }

    return arr;
}

console.log(permute('abc','', result));
// console.log(permute('aab','', result));

let result1 = []
function permuteBactracking(string, start , arr){
    if(start === string.length - 1){
        return arr.push(string);
    }
    let obj = new Set();

    for (let i = 0; i < string.length; i++) {
        if(!obj.has(string[i])){
            obj.add(string[i]);
            string = swapChar(string, i, start)
            // console.log(string);
            permuteBactracking(string,start + 1,arr);
            string = swapChar(string, i, start)
        }
    }

    return arr;
}


function swapChar(str, i , j){
    let arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
}
console.log(permutations('abc'));

function permutations(s) {
    let ans = [];
    let idx = 0;
    solve(idx, s.split(""), ans);
    return ans;
  }
  
  function solve(idx, s, ans) {
    if (idx === s.length - 1) {
      let str = s.join("");
      ans.push(str);
      return;
    }
    let st = new Set();
    for (let i = idx; i < s.length; i++) {
      if (!st.has(s[i])) {
        st.add(s[i]);
        swap(s, idx, i);
        solve(idx + 1, s, ans);
        swap(s, idx, i);
      }
    }
  }
  
  function swap(s, idx, i) {
    let temp = s[idx];
    s[idx] = s[i];
    s[i] = temp;
  }