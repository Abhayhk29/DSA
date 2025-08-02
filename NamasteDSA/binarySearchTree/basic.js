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
var isValidBST = function(root) {
    const helper = (node, low, heigh) =>{
        if(!node){
            return true;
        }

        if((low != null && node.val <= low) || (heigh != null && node.val >= heigh)){
            return false;
        }

        let leftLow = helper(node.left,  low, node.val)
        let rightLow = helper(node.right, node.val, heigh);

        return leftLow && rightLow;
    }

    return helper(root, null, null)
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    if(root.val < val){
        root.right = insertIntoBST(root.right, val);
    }else{
        root.left = insertIntoBST(root.left, val);
    }

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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // let counter = 0;
    // const helper = (root, k) => {
    //     if(root == null){
    //         return null;
    //     }

    //     let left = helper(root.left, k);

    //     if(left != null){
    //         return left;
    //     }

    //     counter++;

    //     if(counter == k){
    //         return root;
    //     }

    //     return helper(root.right, k)
    // }
    
    // let smallest = helper(root,k);
    
    // console.log(smallest)

    // return smallest.val
    let ans = null;
    let counter = k;
    let traversal = (curr) => {
        curr.left && traversal(curr.left);
        --counter;
        if(counter === 0){
            ans = curr.val;
        }
        curr.right && traversal(curr.right);
    }

    traversal(root);
    return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(p.val > root.val && q.val> root.val){
        return lowestCommonAncestor(root.right, p,q);   
    } else if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    }else{
        return root;
    }
};