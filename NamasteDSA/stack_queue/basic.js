let stack = [];

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop();

console.log(stack); 
console.log(stack[stack.length - 1]);


// queue

let queue = [];
queue.push(1);
queue.push(2);
queue.push(3); // eneque

queue.shift() // deque

console.log(queue[0])


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
     let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift())
    }

    let ans = this.q1.shift();

    this.q1 = this.q2;
    this.q2 = [];
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift())
    }
    let front = this.q1[0];
    this.q2.push(this.q1.shift());

    this.q1 = this.q2;
    this.q2 = [];

    return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



// 225. Implement Stack using Queues
// 225. Implement Stack using Queues one queue


var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        let temp = this.q1.shift();
        this.q1.push(temp)
    }

    let ans = this.q1.shift();

    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        let temp = this.q1.shift();
        this.q1.push(temp)
    }

    let top = this.q1.shift();
    this.q1.push(top)

    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
//  worst O(n)
// Average O(1)
 */
MyQueue.prototype.pop = function() {
    let n = this.s1.length;
    if(this.s2.length === 0){
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let n = this.s1.length;
    if(this.s2.length === 0){
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    
    return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 232. Implement Queue using Stacks


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // if(s.length === 1) return false
    // let stack = [];
    
    // for(let i = 0; i < s.length; i++){
    //     if(s[i] === '{' || s[i] === '(' || s[i] === '[' ){
    //         stack.push(s[i])
    //     } else{
    //         let top = stack.pop();
    //         if(!top || (top === '[' && s[i] != ']') || (top === '(' && s[i] != ')') || (top === '{' && s[i] != '}')){
    //             return false
    //         }
    //     }
    // }

    // return stack.length > 0 ? false : true;
     if(s.length === 1) return false
    let stack = [];
    let map = {
        '(':')',
        '[' : ']',
        '{' : '}'
    }
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            stack.push(s[i])
        } else{
            let top = stack.pop();
            if(!top || s[i] != map[top]){
                return false
            }
        }
    }

    return stack.length > 0 ? false : true;
};

// t : o(n)
// s: o(n)
// 20. Valid Parentheses


var MinStack = function() {
    this.stack = []
     
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0){
        this.stack.push([val,val])
    }else{
        let lastMinVal = this.stack[this.stack.length - 1][1];
        this.stack.push([val, Math.min(val,lastMinVal)])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  155. Min Stackgit s

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // let output = '';
    // let stack = [];

    // for(let i = 0; i < s.length; i++){
    //     if(s[i] === '('){
    //         stack.push(s[i]);
    //         let len = stack.length;
    //         if(len > 1){
    //                 // let top = stack[stack.length - 2]
    //                 output += `${s[i]}`
    //         }
    //     } else {
    //         let len = stack.length;
    //         if(len > 1){
    //                 // let top = stack[stack.length - 2]
    //                 output += `${s[i]}`
    //         }
    //         stack.pop();
    //     }
    // }
    // t O(n)
    // s O(n)
    // return output;
    let output = '';
    let level = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            ++level;
            if(level > 1){
                output += s[i];
            }
        }else{
            if(level > 1){
                output += s[i];
            }
            --level
        }
    }
    // t O(n)
    // S O(1)
    return output;
};


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let obj = {
        '+' : true,
        '-': true,
        '*': true,
        '/':true
    }
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        let exp = tokens[i]
        if(obj[exp]){
            let first  = stack.pop();
            let second  = stack.pop();
            let ans = eval(`${second} ${exp} ${first}`)
            stack.push(Math.trunc(ans))
        }else{
            stack.push(exp);
        }
    }

    return Number(stack.pop())
};

// s O() 
// t O()
// 150. Evaluate Reverse Polish Notation

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextObj = {};
    let stack = [];
    let n = nums2.length;

    stack.push(nums2[n - 1]);
    nextObj[nums2[n - 1]] = -1;

    for(let i = n - 2; i >= 0; i--){
        let top = stack[stack.length - 1];
        if(nums2[i] < top){
            nextObj[nums2[i]] = top;
        }else{
            while(stack.length){
                if(stack[stack.length -1] < nums2[i]){
                    stack.pop();
                }else{
                    nextObj[nums2[i]] = stack[stack.length -1];
                    break;
                }
            }
            if(stack.length === 0){
                nextObj[nums2[i]] = -1;
            }
        }

        stack.push(nums2[i])
    }

    let ans = [];
    for(let i = 0; i < nums1.length; i++){
        ans.push(nextObj[nums1[i]])
    }

    return ans;
};

// time O(n)
// space O(n)
// 496 leetcode

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    // let n = arr.length - 1;
    // let result = new Array(n);
    // let stack = [];

    // for (let i = n; i >= 0; i--) {
    //     if(stack.length === 0){
    //         result[i] = 0;
    //     }else if(stack.length > 0 && stack[stack.length - 1].first > arr[i]){
    //         result[i] = stack[stack.length - 1].second - i;
    //     } else if(stack.length > 0 && stack[stack.length - 1].first <= arr[i]){
    //         while (stack.length > 0 && stack[stack.length - 1].first <= arr[i]) {
    //             stack.pop();
    //         }
    //         if(stack.length === 0){
    //             result[i] = 0;
    //         }else{
    //             result[i] = stack[stack.length - 1].second - i;
    //         }
    //     }
    //     stack.push({first:arr[i],second:i})
    // }

    // return result;
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(0);

    stack.push(n - 1);
    ans[n - 1] = 0; 

    for(let i = n - 2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length - 1];
            if(arr[i] >= arr[top]){
                stack.pop();
            }else{
                ans[i] = top - i;
                break
            }
        }
        stack.push(i)
    }

    return ans;
};

// time O(n)
// space O(n)
// temperature 739
