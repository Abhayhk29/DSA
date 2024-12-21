// input madam : Output: m a d a m , m ada m, madamz

    function printAllPalindromicPartitions(str){
        let result = [];
        backtrack(str, [], result);
        console.log(result);
    }

    function backtrack(str, part, result){
        if(str.length == 0){
            result.push(part.slice());
            return;
        }

        for (let i = 1; i <= str.length; i++) {
            const prefix = str.substring(0,i);
            if(isPalindrome(prefix)){
                part.push(prefix);
                backtrack(str.substring(i),part, result);
                part.pop();
            }
        }
    }

  
  function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    return true;
  }
  

let str = 'nitin';
console.log(printAllPalindromicPartitions(str));