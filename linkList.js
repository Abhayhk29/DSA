// Image Viewer

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // O(1)
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
           node.next = this.head;
           this.head = node; 
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log('Link List is empty');
        } else {
          let current = this.head;
          let listValues = '';
           while(current){
                listValues += `${current.value} `;
                current = current.next;
           }
           
           console.log(listValues);
        }
    }

    // O(n)
    append(value){
        // at the end of the list
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
          let prev = this.head;
          while(prev.next){
            prev = prev.next;
          }  
          prev.next = node;
        }
        this.size++;
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            console.log("Invalid Data");
        }

        if(index === 0){
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            console.log("Invalid Data");
        }
        let removeNode = '';
        if(index == 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;

    }

    removeByValue(value){
        if(this.isEmpty()){
            console.log('Nothing');
            return null;
        }

        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let removeNode = '';
           let prev = this.head;
           while(prev.next && prev.next.value !== value){
                prev = prev.next;
           }
           
           if(prev.next){
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }

           }

           return null;
        }

        search(value){
            if(this.isEmpty()){
                return -1;
            }else{
                let i = 0;
                let current = this.head;
                while(current){
                    if(current.value === value){
                        return i;
                    }
                    current = current.next;
                    i++;
                }
            }

            return -1;
        }

        reverseLinkList(){
            let curr = this.head;
            let prev = null;
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
}


class LinkedListWithTaik {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log('Link List is empty');
        } else {
          let current = this.head;
          let listValues = '';
           while(current){
                listValues += `${current.value} `;
                current = current.next;
           }
           
           console.log(listValues);
        }
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;

    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;

    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }

        const value = this.tail.value;
        if(this.size === 1){
           this.head = null;
           this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }


}


// const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.append(10);
// list.append(11);
// list.append(12);
// list.append(13);
// list.insert(22,0);
// list.insert(23,2);
// list.print();
// list.removeFrom(2);
// list.print();
// // list.removeByValue(12);
// list.print();
// list.reverseLinkList();
// list.print();
// // console.log(list.search(12));

class LinkedListStack{
    constructor(){
        this.list = new LinkedListWithTaik();
    }

    push(value){
        this.list.append(value);
    }

    pop(){
        this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        return this.list.print();
    }

}

// const list = new LinkedListWithTaik();

// list.append(12);
// list.append(13);
// list.append(14);
// list.prepend(15);
// list.print();


// const stack = new LinkedListStack();

// stack.push(12);
// stack.push(14);
// stack.push(16);
// console.log(stack.getSize());
// console.log(stack.print());
// console.log(stack.peek());
// stack.pop();
// console.log(stack.getSize());
// console.log(stack.print());
// console.log(stack.peek());

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    eneque(value){
        this.list.append(value);
    }

    dequeue(){
        this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        return this.list.print();
    }
}

