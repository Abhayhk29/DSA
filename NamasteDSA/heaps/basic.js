// heapify 

class MinHeap {
    constructor(){
        // this.heap = [5, 10, 20, 30]
        this.heap = []
    }

    getLeftChildIndex(i){
        return (2 * i) + 1;
    }

    getRightChildIndex(i){
        return (2 * i) + 2
    }
    // formula for getting the parent index
    getParentIndex(i){
        return Math.floor((i - 1) / 2);
    }

    // o(log(n)
    insert(val){
         this.heap.push(val);
         let lastIndex = this.heap.length - 1;
         this.heapifyUp(lastIndex); 
    }

    heapifyUp(i){
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if(this.heap[i] < this.heap[parentIndex]){
                [this.heap[i],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[i]]
                i = parentIndex;
            }else{
                break;
            }
        }
    }

    extract(){
        let min = this.heap[0];
        let lastIndex = this.heap.length - 1;

        [this.heap[0],this.heap[lastIndex]] = [this.heap[lastIndex],this.heap[0]]

        this.heap.pop();
        this.heapifyDown(0);

        return min;

    }

    heapifyDown(i){
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;

        let smallest = i;

        if(left < n && this.heap[left] < this.heap[smallest]){
            smallest = left
        }

        if(right < n && this.heap[right] < this.heap[smallest]){
            smallest = right
        }

        if(smallest != i){
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]; 
            this.heapifyDown(smallest);
        }

    }

    peek(){
        if(!this.heap.length) return null;

        return this.heap[0];
    }
}


const myHeap = new MinHeap();

console.log(myHeap.heap);

myHeap.insert(5);
myHeap.insert(20);
myHeap.insert(4);
myHeap.insert(10);
myHeap.insert(1);
myHeap.insert(0);
console.log(myHeap.heap);
myHeap.extract()
myHeap.extract()
myHeap.extract()
console.log(myHeap.heap);
