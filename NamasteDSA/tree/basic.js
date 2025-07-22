/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let ans = [];

    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val)
        traversal(curr.left)
        traversal(curr.right)
    }

    traversal(root);
    return ans;
};

// 114 leetcode


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = [];

    function traversal(curr){
        if(!curr) return;

        traversal(curr.left);
        ans.push(curr.val)
        traversal(curr.right);
    }

    traversal(root);

    return ans;
};

// 94. Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans = [];

    function traversal(curr){
        if(!curr) return;

        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.val)
    }

    traversal(root);

    return ans;
};

// 145. Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // let ans = [];

    // function traversal(curr){
    //     if(!curr) return;
    //     ans.push(curr.val)
    //     traversal(curr.left)
    //     traversal(curr.right)
    // }

    // traversal(root);
    // return ans;
    if(!root) return []
    let ans = [];
    let stack = [root];
    // stack.push(root);

    while(stack.length > 0){
        let data = stack.pop();
        ans.push(data?.val);
        if(data.right){
            stack.push(data.right);
        }
        if(data.left){
            stack.push(data.left)
        }
    }

    return ans;
};

// 144 : - Leetcode

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // let ans = [];

    // function traversal(curr){
    //     if(!curr) return;

    //     traversal(curr.left);
    //     ans.push(curr.val)
    //     traversal(curr.right);
    // }

    // traversal(root);

    // return ans;
    if(!root) return [];
    let ans = []

    let stack = [];
    let curr = root;
    while(curr || stack.length > 0){
        while(curr){
            stack.push(curr);
            curr = curr.left
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }

    return ans;
};


// iterative approach