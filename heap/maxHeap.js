class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.isEmpty())
            return null;

        const max = this.heap[0];
        const lastElement = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return max;
    }

    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (parentIndex >= 0 && this.heap[parentIndex].diff < 
            this.heap[index].diff) {
            this.swap(parentIndex, index);
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;

        if (leftChildIndex < this.heap.length && 
        this.heap[leftChildIndex].diff > 
        this.heap[largestIndex].diff) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && 
        this.heap[rightChildIndex].diff > 
        this.heap[largestIndex].diff) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== index) {
            this.swap(largestIndex, index);
            this.heapifyDown(largestIndex);
        }
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = 
        [this.heap[index2], this.heap[index1]];
    }
}


function findClostestElement(arr, k ,x){
    const maxHeap = new MaxHeap();

    for (let i = 0; i < arr.length; i++) {
        maxHeap.insert({ diff: Math.abs(arr[i] - x), value: arr[i] });
        if (maxHeap.size() > k) {
            maxHeap.extractMax();
        }
    }

    const result = [];

    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.extractMax().value);
    }

    return result.sort((a,b) => a - b);
}


console.log(findClostestElement([5, 6, 7, 8, 9], 3, 7)); // Output: [6, 8, 5]
console.log(findClostestElement([1,2,3,4,5], 4, 3)); // Output: [6, 8, 5]
// console.log(findClostestElement())