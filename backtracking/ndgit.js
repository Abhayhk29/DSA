// ip = 2
// op => aray of digit  1 2 3 4 5 6  7 8 9 12 13 14 15 16 17 18

function nDigitIncreasing(n, v, res) {
    if (n === 0) {
      res.push(v);
      return;
    }
  
    for (let i = 1; i < 9; i++) {
      
      
    }
  }
  
  function increasingNumber(n){
      let res = [];
  
      if(n === 1){
          res = Array.from({length:10}, (_,i) => i);
          return res;
      }
  
      let vec = [];
  
  
      function  solve(vec,res,n){
          if(n === 0){
              let ans = 0;
              for (let i = 0; i < vec.length; i++) {
                  ans = (ans * 10) + vec[i];
              }
              res.push(ans);
              return
          }
  
          for (let i = 1; i < 10; i++) {
              if(vec.length === 0 || i > vec[vec.length - 1]){
                  vec.push(i);
                  solve(vec,res,n - 1);
                  vec.pop();
              }
              
          }
      }
  
      solve(vec,res,n);
      return res;
  }
  
  console.log(increasingNumber(3));
  // 9^n