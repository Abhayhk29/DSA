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
    // let ans = [];

    // function traversal(curr){
    //     if(!curr) return;

    //     traversal(curr.left)
    //     traversal(curr.right)
    //     ans.push(curr.val)
    // }

    // traversal(root);

    // return ans;

    // let curr = null;
    if(!root) return [];
    let s1 = [root];
    let s2 = [];
    while(s1.length > 0){
        let curr = s1.pop();
        s2.push(curr);
        curr?.left && s1.push(curr.left);
        curr?.right && s1.push(curr.right);
    }

    let ans = [];
    while(s2.length){
        ans.push(s2?.pop().val)
    }

    return ans;

    // one stack approach
    // if(!root) return [];
    // let stack = [];
    // let curr = root;
    // let ans = []
    // // let prevNode = null;
    // let visitedV = null;
    // while(stack.length || curr){
    //     while(curr){
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     let peekNode = stack[stack.length - 1];
    //     if(peekNode.right && peekNode.right !== visitedV){
    //         curr = peekNode.right
    //     }else{
    //         ans.push(peekNode.val);
    //         visitedV = stack.pop()
    //     }
    // }
    // return ans;

};

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // let q = [root], ans = []
    // while (q[0]) {
    //     let qlen = q.length, row = []
    //     for (let i = 0; i < qlen; i++) {
    //         let curr = q.shift()
    //         row.push(curr.val)
    //         if (curr.left) q.push(curr.left)
    //         if (curr.right) q.push(curr.right)
    //     }
    //     ans.push(row)            
    // }
    // return ans
    // let res = [];

    // if(!root){
    //     return res;
    // }

    // let queue = [root];

    // while(queue.length > 0){
    //     let dummy = [];
    //     let size = queue.length;
    //     for (let i = 0; i < size; i++) {
    //         const pop = queue.shift();
    //         dummy.push(pop.val);
    //         if(pop.left){
    //             queue.push(pop.left)
    //         }            

    //         if(pop.right){
    //             queue.push(pop.right);
    //         }
    //     }
    //     res.push(dummy);
    // }
    // return res;

    // let ans = [];
    // if(!root){
    //     return ans;
    // }

    // let queue = [root];

    // while(queue.length){
    //     let dummy = [];
    //     let size = queue.length;
    //     for(let i = 0; i < size; i++){
    //         const fval = queue.shift();
    //         dummy.push(fval.val);
    //         if(fval.left) queue.push(fval.left)
    //         if(fval.right) queue.push(fval.right)
    //     }
    //     ans.push(dummy);
    // }
    // return ans;
    if(!root) return [];
    let ans = [];

    let traversal = function(curr,level){
        if(!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1)
        curr.right && traversal(curr.right, level + 1)
    }
    traversal(root,0)
    return ans
};

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // let queue = [];
    // queue.push(root.left);
    // queue.push(root.right);
    // while(queue.length > 0) {
    //     let left = queue.shift();
    //     let right = queue.shift();
    //     if(left === null && right === null) {
    //         continue;
    //     }
    //     if(left === null || right === null) {
    //         return false;
    //     }
    //     if (left.val !== right.val) {
    //         return false;
    //     }
    //     queue.push(left.left);
    //     queue.push(right.right);
    //     queue.push(left.right);
    //     queue.push(right.left);
    // }
    // return true;
    // if(!root) return 
    // const isMirror = (left, right) => {
    //     if(!left && !right) return true;

    //     if(!right || !left) return false;
    //     return right.val === left.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    // }

    // return isMirror(root.left, root.right)
    let q = [root.left, root.right];
    while(q.length){
        let p1 = q.shift();
        let p2 = q.shift();

        if(!p1 && !p2) continue;

        if(p1 == null || p2 == null) return false;

        if(p1.val !== p2.val) return false;

        q.push(p1.left, p2.right);
        q.push(p1.right, p2.left);
    }
    return true;
};

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // if(!root){
    //     return null;
    // }

    // let tmp = root.left;
    // root.left = root.right;
    // root.right = tmp;
    
    // invertTree(root.left);
    // invertTree(root.right);

    // return root;

    if(!root){
        return root;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;

    if(!p || !q) return false;

    return p.val === q.val && isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
};

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans = true;
    let calculateHeight = (curr) => {
        if(!curr) return 0;
        let leftHeight = calculateHeight(curr.left);
        let rightHeight = calculateHeight(curr.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
    calculateHeight(root);
    return ans;
};

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // let dia = 0;

    // function height(node){
    //     if (!node){
    //         return 0;
    //     }

    //     let leftHeight = height(node.left);
    //     let rightHeight = height(node.right);

    //     let diam = leftHeight + rightHeight + 1;
    //     dia = Math.max(dia, diam);
    //     return Math.max(leftHeight, rightHeight) + 1;
    // }

    // height(root);

    // return dia - 1;

    let maxDiam = 0;

    function calcDepth(curr){
        if(!curr) return 0;

        let leftDepth = calcDepth(curr.left);
        let rightDepth = calcDepth(curr.right);
        let currDepth = leftDepth + rightDepth;
        maxDiam = Math.max(currDepth, maxDiam);
        return 1 + Math.max(leftDepth, rightDepth);
    }
    calcDepth(root)
    return maxDiam;
};

// let diameter = 0;
// function diameterOfBinaryTree(root) {
//   height(root);
//   return diameter - 1;
// }

// function height(node) {
//   if (node === null) {
//     return 0;
//   }
//   let leftHeight = height(node.left);
//   let rightHeight = height(node.right);
//   let dia = leftHeight + rightHeight + 1;
//   diameter = Math.max(diameter, dia);
//   return Math.max(leftHeight, rightHeight) + 1;
// }

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    // if(!root){
    //     return [];
    // }
    
    // let queue = [root];
    // let zigzag = true;
    // let res = []
    // while(queue.length > 0){
    //     let dummy = [];
    //     let size = queue.length;
    //     for (let i = 0; i < size; i++) {
    //         const pop = queue.shift();
    //         dummy.push(pop.val);
    //         if(pop.left){
    //             queue.push(pop.left)
    //         }            

    //         if(pop.right){
    //             queue.push(pop.right);
    //         }
    //     }
    //     if(zigzag){
    //         res.push(dummy);
    //         zigzag = false;
    //     }else{
    //         res.push(dummy.reverse());    
    //         zigzag = true;
    //     }
        
        
    // }
    
    // return res;
    if(!root) return [];
    let ans = [];
    let q = [root];
    let level = 0;
    while(q.length){
        let levelArr = [];
        let levelSize = q.length;
        for(let i = 0; i < levelSize; i++){
            let curr = q.shift();
            if(level % 2 == 0){
                levelArr.push(curr.val)
            }else{
                levelArr.unshift(curr.val)
            }
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(levelArr);
        ++level;
    }
    return ans;
};

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    // if(!root){
    //     return [];
    // }
    
    // let queue = [root];
    // let zigzag = true;
    // let res = []
    // while(queue.length > 0){
    //     let dummy = [];
    //     let size = queue.length;
    //     for (let i = 0; i < size; i++) {
    //         const pop = queue.shift();
    //         dummy.push(pop.val);
    //         if(pop.left){
    //             queue.push(pop.left)
    //         }            

    //         if(pop.right){
    //             queue.push(pop.right);
    //         }
    //     }
    //     if(zigzag){
    //         res.push(dummy);
    //         zigzag = false;
    //     }else{
    //         res.push(dummy.reverse());    
    //         zigzag = true;
    //     }
        
        
    // }
    
    // return res;
    // if(!root) return [];
    // let ans = [];
    // let q = [root];
    // let level = 0;
    // while(q.length){
    //     let levelArr = [];
    //     let levelSize = q.length;
    //     for(let i = 0; i < levelSize; i++){
    //         let curr = q.shift();
    //         if(level % 2 == 0){
    //             levelArr.push(curr.val)
    //         }else{
    //             levelArr.unshift(curr.val)
    //         }
    //         curr.left && q.push(curr.left)
    //         curr.right && q.push(curr.right)
    //     }
    //     ans.push(levelArr);
    //     ++level;
    // }
    // return ans;
    if (!root) return [];

    const result = [];

    function dfs(node,level){
        if(!node) return;
        if(result.length === level)
            result[level] = [];

        if(level % 2 === 0){
            result[level].push(node.val);
        }else{
            result[level].unshift(node.val);
        }

        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }

    dfs(root,0);
    return result
};

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let rootHash = serialize(root)
    let rootSubHash = serialize(subRoot)

    return rootHash.includes(rootSubHash);
};

let serialize = (root) => {
    let hash = '';
    let traversal = (curr) => {
        if(!curr){
            hash = hash + '-#'
            return;
        }
        hash = hash + "-" + curr.val;
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root);
    return hash;
}

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
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0;
    let traversal = (curr, maxSeenFar) => {
        if(curr.val >= maxSeenFar){
            ++ans;
        }
        let currMax = Math.max(curr.val, maxSeenFar);
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }    
    traversal(root, -Infinity);
    return ans;
};


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {    
    // let curr = root;
    // let nxt = root ? root.left : null;
    // while (curr && nxt) {
    //     curr.left.next = curr.right;
    //     if (curr.next) {
    //         curr.right.next = curr.next.left;
    //     }
    //     curr = curr.next;
    //     if (!curr) {
    //         curr = nxt;
    //         nxt = curr.left;
    //     }
    // }
    // return root;
    if(!root) return root;
    let traversal = (curr) => {
        if(curr.left){
            curr.left.next = curr.right;
        }
        if(curr.right && curr.next){
            curr.right.next = curr.next.left;
        }
        curr.left && traversal(curr.left)
        curr.right && traversal(curr.right)
    }
    traversal(root);
    return root;
};


