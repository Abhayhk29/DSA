const howSum = (target, numbers) => {
   if(target === 0) return [];
   if(target < 0) return null;


   for (const num of numbers) {
     const rem = target - num;

     const remResult = howSum(rem, numbers);

     if(remResult !== null){
        return [...remResult, num];
     }
   }

   return null;
}


// time O(n^m)
// space O(m) 

const howSumMemo = (target, numbers, memo ={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
 
 
    for (const num of numbers) {
      const rem = target - num;
 
      const remResult = howSumMemo(rem, numbers);

      if(remResult !== null){
        memo[target] = [...remResult, num];
        return memo[target];
      }
    }
 
    memo[target] = null
    return null;
 }

 // time O(n*m^2)
// space O(m^2) 

const howSumDynamic = (target, nums) => {
    // time O(m^2n)
    // O(m^2)

    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < target; i++) {
        if(table[i] !== null){
            for (const num of nums) {
                table[i + num] = [...table[i], num];
            }
        }
        
    }

    return table[target]
}


console.log(howSum(3,[2,4]));
console.log(howSum(8,[2,4]));
console.log(howSumMemo(3,[2,4]));
console.log(howSumMemo(8,[2,4]));
console.log(howSumDynamic(8,[2,4]));