/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = {}
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(!unique[nums[i]]){
            unique[nums[i]] = true;
            nums[x] = nums[i];
            x++; 
        }
    }

    return x;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] > nums[x]) {
              x++;
              nums[x] = nums[i];
          }
      }
      return x + 1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;
    for(let num of nums){
        if(num !== val){
            nums[x] = num;
            x++;
        }
    }

    return x;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let st = 0;
    let e = s.length - 1

    while(st < e){
        let temp = s[st];
        s[st] = s[e];
        s[e] = temp
        st++;
        e--;
    }
};


// @param {number[]} prices
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] > prices[i]){
                maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
            }
        }
    }

    return maxProfit;
};

// better approach

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let min = prices[0];
   let maxProf = 0;

   for(let i = 0; i < prices.length; i++){
      if(prices[i] - min > maxProf){
        maxProf = prices[i] - min;
      }

      if(prices[i] < min){
        min = prices[i]
      }
   }

   return maxProf;
};