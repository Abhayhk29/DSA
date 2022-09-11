// parent and child node Root node , Leaf node which do not have child node
// Binary Search Tree : value of each left node must be smaller than the parent node
// Value of each right node must be greater that the parent node
// OPerations : Insertion, deletion, BFS AND BFS to visit all the node in the tree
// Deletion : remove a node given its value

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }

            if(curr.right){
                queue.push(curr.right);
            }
        }

    }

    min(root){
        if(!root.left){
            return root.value;
        }
        return this.min(root.left);
    }

    max(root){
        if(!root.right){
            return root.value;
        }

        return this.max(root.right);
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root,value){
        if(root === null){
            return root;
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else if (value > root.value){
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            } else if (!root.right){
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;

    }


}

// DFS Depth First Search
// DFS algorith start at the root node and explores as far as possible along each domain
// before backtracking
// 1. Preorder 2. Inorder 3. Postorder
// Preorder : 1. Read the Data of the node 2. Visit the left subtree 3. Visit the right subtree
// 2.Inorder : 1: visit the left subtree; 2: Read the value of the node 3. visit the right subtree.
// Post Order : 1. Visit the leftsubtree 2. Visit the right subtree 3. read the value

// BREADTH fIRST SEARCH : Explore all nodes at the present depth prior to moving
// on to the nodes at the next depth level
// Create a Queue 
// Eneque the root node
// As long as a node exist in the queue
// a. Dequeue the node from thr front
// Read the node's value
// Eneque the node's left child if exists
// Eneque the node's right child if it exists 

// Min Node : left node max : right


const tree = new BinarySearchTree();

console.log(tree.isEmpty());
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// console.log(tree.search(tree.root,12));
// console.log(tree.search(tree.root,10));

// console.log(tree.preorder(tree.root));
// console.log(tree.postorder(tree.root));
// console.log(tree.levelOrder());
// console.log(tree.min(tree.root));
// console.log(tree.max(tree.root));


tree.levelOrder();
console.log('----------------------------------------------');
tree.delete(10);
tree.levelOrder();


