// identification  : k element
// k
// smallest and largest
// Min and Max heap 
// k + smallest => max
// k + largest => min
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


// const heapA = new MinHeap();


function nearlySorted(arr,k){
    let ans = [];
    const heapA = new MinHeap();

    for(let i = 0; i < arr.length; i++){
        heapA.push(arr[i]);
        if(heapA.heap.length > k){
            ans.push(heapA.pop());
        }
    }

    while(!heapA.isEmpty()){
        ans.push(heapA.pop());
    }
    
    return ans;
}
// heapA.push(8)
// heapA.push(2)
// heapA.push(81)
// heapA.push(7)

// console.log(heapA)
// console.log(heapA.pop())
// console.log(heapA.heap.length)
console.log(nearlySorted([6, 5, 3, 2, 8, 10, 9],3))