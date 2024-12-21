// Root : beacuse its has no parent
// leaf: Its not has any child
// Edges
// Parent and Child Relative position
// Binary at most 2 children can have less than 2 children
// Exactly 1 root 
// Exatcly 1 path between root and the Node
// Empty tree as Binary tree with zero node
// 


class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depth first row
// left and right child for the graph
// DFS : a,b,d means go deaper 
// a,b,d,e,c,f like a stack
// stack : top on the top of the stack
// Time O(n)
// space O(n)
// iterative
const depthFirstValue = (root) => {

    if(root === null) return [];
    const arr = [root];

    while(arr.length > 0){
        const current = arr.pop();
        console.log(current.val);
        
        if(current.right){
            arr.push(current.right);
        }
        if(current.left){
            arr.push(current.left);
        }

    }
}

const depthFirstValueRec = (root) => {

    if(root === null){
        return [];
    }

    const left = depthFirstValueRec(root.left);
    const right = depthFirstValueRec(root.right);

    return [root.val, ...left, ...right];
}
// console.log(depthFirstValueRec(a));
