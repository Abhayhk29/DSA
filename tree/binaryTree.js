
// Basic class 
// 
// height of these two is should be less or equal to 1
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        // this.height = 0;
    }
}

class BinaryTree {
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
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode 
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    getHeight(){
        return this.height(this.root);
    }

    height(root){
        if(root == null){
            return 0;
        } else{
            let lDepth = this.height(root.left);
            let rDepth = this.height(root.right);

            if(lDepth > rDepth){
                return lDepth + 1;
            }else{
                return rDepth + 1;
            }
        }
    }
    
    checkBalance(){
        if(this.root == null){
            return true;
        }

        return Math.abs(this.height(this.root.left) - this.height(this.root.right));
    }

    display(root){

    }
}