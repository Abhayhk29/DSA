class MaxPriorityHeap {
    constructor(){
        this.heap = [];
    }

    // pushing a value with the priority
    enqueue(val,priority){
        this.heap.push({val,priority});
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parent = Math.floor((index - 1) /2);
            if(this.heap[index.priority <= this.heap[parent].priority]) break;
            this.swap(index,parent);
            index = parent;
        }
    }

    dequeue(){
        if(this.heap.length === 0) return null;

        const max = this.heap[0];

        const end = this.heap.pop();

        if(this.heap.length > 0){
            this.heap[0] = end;
            this.heapifyDown();
        }

        return max;
    }

    heapifyDown(){
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if(left < length && this.heap[left].priority > this.heap[largest].priority){
                largest = left
            }

            if(right < length && this.heap[right].priority > this.heap[largest].priority){
                largest = right
            }

            if(largest === index) break;
            this.swap(index,largest);
            index = largest;
        }
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
}

let maxQueue = new MaxPriorityHeap();


maxQueue.enqueue('india', 78)
maxQueue.enqueue('pakistan',7)
maxQueue.enqueue('usa',79)
console.log(maxQueue.dequeue())
console.log(maxQueue.heap)