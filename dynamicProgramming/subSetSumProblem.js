// problem set
let arr = [2, 3, 7, 8, 10];
let sum = 13;

function subSet(arr, sum, n) {
  let t = [];
  for (let i = 0; i <= arr.length + 1; i++) {
    t[i] = [];
    for (let j = 0; j <= sum + 1; j++) {
      if (i == 0) {
        t[i][j] = false;
      } else if (j == 0) {
        t[i][j] = true;
      } else {
        t[i][j] = "";
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= sum) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][sum];
  console.log(t);
}

function subSetRecursion(arr, sum, n) {
  if (sum > 0 && n == 0) {
    return false;
  }

  if(sum == 0){
    return true;
  }

  if(arr[n - 1] <= sum){
    return subSetRecursion(arr, sum - arr[n - 1], n  -1) || subSetRecursion(arr, sum, n - 1)
  }else{
    return subSetRecursion(arr, sum, n - 1)
  }
}

// public class SubsetSumRecursion {

//     public static void main(String[] args) {
//       int[] arr = {2, 3, 7, 8, 10};
//       int sum = 6;
//       int n = arr.length;
//       System.out.println("Is the sum present in the subset? " + subsetSum(arr, sum, n));
//     }

//     public static boolean subsetSum(int[] arr, int sum, int n) {
//       if (sum > 0 && n == 0) {
//         return false;
//       }

//       if (sum == 0) {
//         return true;
//       }

//       if (arr[n - 1] <= sum) {
//         return subsetSum(arr, sum - arr[n - 1], n - 1) ||
//             subsetSum(arr, sum, n - 1);
//       } else {
//         return subsetSum(arr, sum, n - 1);
//       }
//     }
//   }

// console.log(subSet(arr, sum, arr.length));
// console.log(subSetRecursion(arr, sum, arr.length));


// equal sum partition
let arr1 = [1,5,11,5,1]
// need to divide into equal parts in term of the value
// [1,5,1] => [11]

function equalSubsetPartion(arr1){
    let sum  = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
    }

    if( sum % 2 === 0){
        return subSetRecursion(arr1, sum / 2, arr1.length)
    }else{
        return false;
    }

    console.log(sum);
}

// console.log(equalSubsetPartion(arr1));


// count of subsets 

function countOfSubsetnum(arr,sum,n){
    let t = [];
  for (let i = 0; i <= n + 1; i++) {
    t[i] = [];
    for (let j = 0; j <= sum + 1; j++) {
        
      if (i == 0) {
        t[i][j] = 0;
      } 
      
      if (j == 0) {
        t[i][j] = 1;
      } else {
        t[i][j] = 0;
      }
    }
  }
  
  // console.log(t);
  // return;
  for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < sum + 1; j++) {
          if (arr[i - 1] <= j) {
              t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j];
            } else {
                t[i][j] = t[i - 1][j];
            }
        }
    }
    // console.log(t)
  return t[n][sum]
}


function countNumberOfSubset(arr,diff){
  let sum  = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    let val = (diff + sum) / 2;
    // console.log(val);
    return countOfSubsetnum(arr,val, arr.length)

}

let ds = [2,3,5,6,8,10];

// console.log(countOfSubsetnum(ds,10, ds.length));
console.log(countNumberOfSubset([1,1,2,3],1));