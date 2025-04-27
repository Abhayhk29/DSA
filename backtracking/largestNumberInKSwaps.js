let str = "9477";

function solve(s, k, start, res) {
//   res = res.join("");
//   console.log("--------------w-------------");
//   console.log(k);
//   console.log("---------------w------------");
  if (k === 0 || start === s.length - 1) {
    return;
  }

  let maxSt = getMaxChar(s, start);
  for (let i = start + 1; i < s.length; i++) {
    if (s[start] < s[i] && s[i] === maxSt) {
      let swappedStr = swap(s, start, i);
    //   console.log("----------------------434------------------");
    //   console.log(swappedStr.localeCompare(res));
    //   console.log(res);
    //   console.log(swappedStr);
    //   console.log(swappedStr > res);
    //   console.log("----------------------434------------------");
      if (swappedStr > res.ans) {
          res.ans = swappedStr;
        //   console.log("---------------------------");
        //   console.log(swappedStr);
        //   console.log(str);
        //   console.log(k);
          console.log(res);
        //   console.log(swappedStr.localeCompare(res));
        //   console.log("---------------------------");
      }
      solve(swappedStr, k - 1, start + 1, res);
    }
    solve(s, k, start + 1, res);
  }
}

function swap(str, i, j) {
  let charArray = str.split("");
  let temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function getMaxChar(str, start) {
  let maxChar = str[start];
  for (let i = start + 1; i < str.length; i++) {
    if (str[i] > maxChar) {
      maxChar = str[i];
    }
  }

  return maxChar;
}

// to create a laregest number by using K swaps

let res = {ans : str};
solve(str, 2, 0, res);
console.log(res.ans);
// time complexity  : n! / (n - k)!