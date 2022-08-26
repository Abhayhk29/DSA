// Stack
// LIFO : Last in first out
// Plate of stacks
// browser History Tracking
// Undo Operation while typing
// Example of javascript run engine

// stack Implement


class Stack {
    constructor(){
        this.item = [];
    }

    push(element){
        this.item.push(element);
    }

    pop(){
        return this.item.pop();
    }

    peek(){
        return this.item[this.item.length - 1];
    }

    isEmpty(){
        return this.item.length === 0;
    }

    size(){
        return this.item.length;
    }

    prrint(){
        console.log(this.item.toString());       
    }
}




const stack = new Stack();

console.log(stack.isEmpty());
stack.push(23);
stack.push(34);

console.log(stack.prrint());

