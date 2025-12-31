function isPlaidrome(str){
    let start = 0;
    let end = str.length - 1;
    let RegEx = /^[a-z0-9]+$/i; 

    while( start < end){
        let left = str.charAt(start);
        let right = str.charAt(end);
        if(!RegEx.test(left)){
            start++;
            continue;
        }
        if(!RegEx.test(right)){
            end--;
            continue;
        }
        if(left.toLowerCase() === right.toLowerCase()){
            start++;
            end--;
        }else{
            return false;
        }

    }

    return true;
}

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
    return s;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let res = []
    let k = nums.length - 1;
    while(start <= end){
        if(Math.abs(nums[start]) > Math.abs(nums[end])){
            res[k] = nums[start] * nums[start];
            start++
        } else {
            res[k] = nums[end] * nums[end];
            end--;
        }
        k =  k - 1;
    }

    return res;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    function isPalidrome(i,j,s){
        while(i < j){
            if(s[i] != s[j]){
                return false
            }
            i = i + 1;
            j = j - 1;
        }

        return true;
    }
    while(i < j){
        let left = s.charAt(i);
        let right = s.charAt(j);
        if(left != right){
            return isPalidrome(i + 1, j , s) || isPalidrome(i, j - 1, s);
        }else{
            i = i + 1;
            j = j - 1;
        }
    }
    return true;
};
// top O(n)
// s O(1)


class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let n = word.length;
        let m = abbr.length;

        let i = 0;
        let j = 0;

        while(i < n && j < m ){
            if(abbr[j] === '0') return false;

            if(isNan(abbr[j])){
                if(word[i] === abbr[j]){
                    i++;
                    j++;
                }else{
                    return false;
                }
            }else{
                let subLen = 0;
                while(j < m && !isNaN(abbr[j]) && abbr[j] !== ''){
                    subLen = subLen * 10 + parseInt(abbr[j]);
                    j++;
                }
                i += subLen
            }
        }
        return i === n && j === m
    }

}
//  time O(m + n);
// space O(1);



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] < target){
                count++;
            }
        }
    }

    return count;
};

// 2824 Count pairs whose sum is less than target
// time complex = O(n^2)
// space = O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {

    nums.sort((a,b) => a - b)
    let count = 0;
    let start = 0;
    let end = nums.length;

    while(start < end){
        if(nums[start] + nums[end] < target){
            count += (end - start);
            start++
        }else{
            end--;
        }
    }

    return count;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newMap = nums.map((val,index) => [val,index]);

    newMap.sort((a,b) => a[0] - b[0]);

    let start = 0;
    let end = newMap.length - 1;

    while(start < end){
        let sum = newMap[start][0] + newMap[end][0];

        if(sum === target){
            return [newMap[start][1] , newMap[end][1]]
        } else if(sum < target){
            start++;
        }else{
            end--;
        }
    
    }
};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;

    while(s < e){
        let sum = nums[s] + nums[e];

        if(sum === target){
            return [s + 1, e + 1];
        }else if (sum > target){
            e = e - 1;
        }else{
            s = s + 1;
        }
    }
};

// if sorted


// 3 sum 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a- b);

    for(let i = 0 ; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        // if(nums[i] > 0) break

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);

                while(left < right && nums[left] === nums[left + 1])left++;
                while(left < right && nums[right] === nums[right - 1])right--;

                left++;
                right--;
            }else if(sum > 0){
                right--
            }else{
                left++
            }
        }

    }

    return result;
};


function sortColor(arr){
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let first = arr[i];
        let last = arr[j];

        if(first === 0){
            i++;
        }else{
            let temp = first;
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    return arr;
}

console.log(sortColor([0,0,1,1,0,0,1,1]))
console.log(sortColor([0,0,1,1,0,0,1,1,0,0]))


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let k = 0;

    while(k <= j){
        if(nums[k] == 1){
            k = k + 1;
        } else if(nums[k] === 2){
            let temp = nums[j];
            nums[j] = nums[k]
            nums[k] = temp;
            j--;
        } else{
            let temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp

            i = i + 1;
            k = k + 1;
        }
    }
};



sortColors([2,0,2,1,1,0])


// dummy , prev and next in case of linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let curr = head;
    let len = 0;
    while(curr){
        curr = curr.next;
        len += 1;
    }

    let prevPos = len - n;
    let prev = dummy;

    for(let i = 0; i < prevPos; i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return dummy.next;

};




// subromattic number means when we rotate it 180 it become similar
// like 0 -> 0 1 - > 1 8 -> 8 , similarly 6 and 9 

function subromatic(num){
    let i = 0;
    let j = num.length - 1;
    let obj = {
        '0':'0',
        '1':'1',
        '6' : '9',
        '8': '8',
        '9': '6'
    }
    while (i <= j) {
        let s = num[i]
        let e = num[j]

        if(obj[s]){
            if(obj[s] != e){
                return false;
            }else{
                i++;
                j--;
            }
        }else{
            return false;
        }
    }

    return true;
}

console.log(subromatic('19261'))

// time O(n) s : O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i = 0;
    let j = 0;

    for( k = 0; k <= s.length - 1 ; k++){
        if(s[i] === t[j] ){
            j++;
        }
        i++;
    }

    return t.length - j;
};

// 2486. Append Characters to String to Make Subsequence
// t : o(m + n)
// s : o(1)




// reverse words in a string 151 leetcode

// t : O(n)
// s : O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();

    let newArr = s.split(/\s+/);
    let result = [];

    for(let i = newArr.length - 1; i >= 0; i--){
        result.push(newArr[i]);
    }
    return result.join(' ')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(" ").filter(word => word !== '');
    let left = 0;
    let right = words.length - 1;

    while(left < right){
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--
    }

    return words.join(' ')

};


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let str = [...s]
    let i = 0;
    for(let k = 0; k <= str.length - 1; k++){
        if(str[k] === ' ' || k === str.length - 1){
            let end = (k === str.length - 1 && str[k] !== '') ? k + 1 : k
            while(i < end){
                [str[i], str[end - 1]] = [str[end - 1], str[i]];
                i++;
                end--;
            }
            i = k + 1;
        }
    }

   return str.join('')
};



// 202. Happy Number
// t : o(logn)
// space : o(1)

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function square(num){
        let sum = 0;
        while(num> 0){
            let mod = num % 10;
            sum += (mod * mod)
            num = Math.floor(num / 10)
        }
        return sum;
    }

    let slow = n;
    let fast = n;

    while(fast != 1){
        slow = square(slow);
        fast = square(square(fast));

        if(fast === 1){
            return true;
        }


        if(fast === slow){
            return false;
        }
    }

    return true;
};


// 876 middle of the link list
// t : o(n)
// s : o(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }

    return slow
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 141 leetcode 
// sp : 0(1)
//  t : O(n)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }

    return false;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 142. Linked List Cycle II
// t : o(n)
// s : O(1)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow){
            break;
        }
    }

    if(fast == null || fast.next === null){
        return null;
    }

    let n1 = slow;
    let n2 = head

    while(n1 != n2){
        n1 = n1.next;
        n2 = n2.next;
    }

    return n2;
};

// if we want to find the length of the cycle



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow){
            break;
        }
    }

    if(fast == null || fast.next === null){
        return null;
    }

    let n1 = slow;
    let n2 = head

    while(n1 != n2){
        n1 = n1.next;
        n2 = n2.next;
    }

    let curr = n1.next;
    let len = 1;

    while(curr != n1){
        len+= 1;
        curr.curr.next;
    }
    console.log(len)

    return n2;
};



/**
 * @param {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// https://www.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1
// t : O(n)
// s : O(1)
class Solution {
    splitList(head) {
        // code here
        let slow = head;
        let fast = head.next;
        
        while(fast != head && fast.next != head){
            slow = slow.next;
            fast = fast.next;
            
            if(fast.next != head){
                fast = fast.next;
            }
        }
        
        fast.next = slow.next;
        
        slow.next = head;
        
        return [head, fast.next]
        
        
    }
}



/**
 * @param {number[]} nums
 * @return {number}
 */

// URL : https://leetcode.com/problems/find-the-duplicate-number/submissions/1867709113/
// ti : o(n)
// s : O(n) because of set
var findDuplicate = function(nums) {
    let newMap = new Map();

    for(let i = 0; i <= nums.length - 1; i++){
        if(newMap.has(nums[i])){
            return nums[i];
        }
        newMap.set(nums[i]);
    }
};

// t O(n)
//  s : O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let slow = 0;
   let fast = 0;


   do {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if(slow === fast){
        break;
    }
   } while (slow != fast)

   let n1 = 0;
   let n2 = slow;

   while(n1 != n2){
    n1 = nums[n1]
    n2 = nums[n2]
   }


   return n1;
};


// https://leetcode.com/problems/palindrome-linked-list/submissions/1867727434/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// t : O(n)
// s : O(n)
var isPalindrome = function(head) {
    let tempArr = [];

    while(head){
        tempArr.push(head.val);
        head = head.next;
    }

    let i = 0;
    let j = tempArr.length - 1;
    console.log(tempArr);
    while(i < j){
        if(tempArr[i] == tempArr[j]){
            i  = i + 1;
            j = j - 1;
        }else{
            return false;
        }
    }

    return true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const reverseList = (curr) => {
        let prev = null;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let p2 = reverseList(slow);
    let p1 = head;

    while(p1 && p2){
        if(p1.val != p2.val){
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};

// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/

// 2130. Maximum Twin Sum of a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    const reverseList = (curr) => {
        let prev = null;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    let slow = head;
    let fast = head;


    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let p2 = reverseList(slow);
    let p1 = head;

    let max = 0
     while(p1 && p2){
        max = Math.max(max, p1.val + p2.val )
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return max
};


