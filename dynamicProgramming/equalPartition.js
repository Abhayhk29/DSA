const  sumEqualPartition = (arr, n) => {
   let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
   }

   if(sum % 2 != 0){
    return false;
   }

   const target = sum / 2;
    

   const canPartition = (index,sum, memo = {}) => {
      if(sum === target){
        return true;
      }

      if(index == arr.length){
        return false;
      }

      const addValue = canPartition(index + 1, sum + arr[index] );
      const addNotValue = canPartition(index + 1, sum );

      return addValue || addNotValue;
   }
   return canPartition(0,0);

}

let arr = [1,5,11,5,1];
console.log(sumEqualPartition(arr, arr.length));

