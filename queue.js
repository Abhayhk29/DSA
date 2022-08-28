// fifo First in first out
// standing in queue example
// Printers
// CPU task Scheduling
// Callback Queue in javascript runtime

class Queue {
    constructor(){
        this.items = [];
    }

    eneque(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }

        return null;
    }

    size(){
        return this.items.length;
    }

    print(){
        return this.items.toString();
    }

}


// const queue = new Queue();
// console.log(queue.isEmpty());


class QueueObject {
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    eneque(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    deueue(){
        const element = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return element;
    }


    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }


}


// const queu2 = new QueueObject();
// console.log(queu2.isEmpty());
// queu2.eneque(10);
// queu2.eneque(20);
// queu2.eneque(30);
// console.log(queu2.size());

// queu2.print();

// console.log(queu2.deueue());


// circular queue
// clock
// Streaming Data
// Trsffic Lights

class CircularQueue{
    constructor(capacity){
        this.items = new Array();
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    eneque(element){
        this.rear = (this.rear + 1 ) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength += 1;
        if(this.front === -1){
            this.front = this.rear;
        }

    }


    deueue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }else{
            let i;
            let str = '';
            for(i = this.front; i !== this.rear; i = (i+1) % this.capacity ){
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
    
}


const cirQ = new CircularQueue(5);
// console.log(cirQ.isEmpty());


cirQ.eneque(10);
cirQ.eneque(12);
cirQ.eneque(134);
cirQ.eneque(104);
cirQ.eneque(1043);
// cirQ.deueue();
// console.log(cirQ.isFull());
// console.log(cirQ.peek());
cirQ.print();








