// function wordBreak(s,idx,temp,wordDict,ans){
//     if(idx === s.length){
//         let word = temp.join(" ")
//         ans.push(word);
//         console.log("-------------------");
//         console.log(ans);
//         console.log("-------------------");
//         return;
//     }

//     let str = '';

//     for (let i = idx; i < s.length; i++) {
//         str += s.charAt(i);
//         if(wordDict.has(str)){
//             console.log(str);
//             temp.push(str);
//             wordBreak(s, i + 1, temp, wordDict,ans);
//             temp.pop();
//         }
//     }
// }


// let temp = [];
// let wordDict = new Set(["cats","dog","sand","and","cat"]);
// let str = 'catsandog';
// let ans = [];
// wordBreak(str,0,temp, wordDict,ans);
// console.log(ans);

class Solution {
    static wordBreak(n, dict, s) {
      const ans = [];
      this.helper(0, n, dict, [], ans, s);
      return ans;
    }
  
    static helper(ind, n, dict, temp, ans, s) {
      if (ind === s.length) {
        const word = temp.join(' ');
        ans.push(`(${word})`);
        return;
      }
  
      let tem = '';
      for (let i = ind; i < s.length; i++) {
        tem += s.charAt(i);
        if (dict.includes(tem)) {
          temp.push(tem);
          this.helper(i + 1, n, dict, temp, ans, s);
          temp.pop();
        }
      }
    }
  }

  const dict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
const s = 'pineapplepenapple';
const result = Solution.wordBreak(dict.length, dict, s);
console.log(result);