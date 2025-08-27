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


// const myHeap = new MinHeap();

// console.log(myHeap.heap);

// myHeap.insert(5);
// myHeap.insert(20);
// myHeap.insert(4);
// myHeap.insert(10);
// myHeap.insert(1);
// myHeap.insert(0);
// console.log(myHeap.heap);
// myHeap.extract()
// myHeap.extract()
// myHeap.extract()
// console.log(myHeap.heap);

function heapSort(arr){
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--) {
    // for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        heapifyDown(arr,i,n);        
    }
    console.log(arr)
    // sort the array
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapifyDown(arr, 0, i);
    }
    return arr;
}

function heapifyDown(arr, i, n){
    let largest = i;

    let left = (2 * i) + 1;
    let right = (2 * i) + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapifyDown(arr,largest,n);
    }
}


let arr = [32,2,1,45,21,56,78,98];
console.log(heapSort(arr));

var findKthLargest = function(nums, k) {
   let minHeap = new MinPriorityQueue(); // Min heap to store k largest elements
    
    for (let num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    return minHeap.front()
};

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;
    for(let i = 0; i < nums.length; i++){
        this.add(nums[i]);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val);
    if(this.heap.size() > this.k){
        this.heap.dequeue()
    }

    return this.heap.front()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 *
 * */


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();

    for(let i = 0; i < stones.length; i++){
        pq.enqueue(stones[i])
    };

    while(pq.size() > 1){
        let x = pq.dequeue()
        let y = pq.dequeue()

        if(x - y > 0){
            pq.enqueue(x - y)
        }
    }

    return pq.dequeue() || 0;
};


// time complexity : O(nlog(n))
// space  : O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//     let obj = {};
//     let buckets = [];
//     console.log(buckets);
    
//     for(let num of nums){
//         if(obj[num]){
//             obj[num]++;
//         }else{
//             obj[num] = 1
//         }
//     }

//     for(let [num, freq] of Object.entries(obj)){
//         if(!buckets[freq]){
//             buckets[freq] = new Set().add(num);
//         } else {
//             buckets[freq] = buckets[freq].add(num);
//         }
//     }
    
//     let result = [];
//     for(let i = buckets.length - 1; i >=0 ; i--){
//         if(buckets[i]) result.push(parseInt(...buckets[i]));
//         if(result.length === k) break;
//     }
//     return result;
    // let freqMap = new Map();
    
    // // Step 1: Count the frequency of each number
    // for (let num of nums) {
    //     freqMap.set(num, (freqMap.get(num) || 0) + 1);
    // }

    // // Step 2: Create buckets where index represents frequency
    // let buckets = Array(nums.length + 1).fill().map(() => []);

    // for (let [num, freq] of freqMap.entries()) {
    //     buckets[freq].push(num);
    // }

    // // Step 3: Gather top k frequent elements from the buckets
    // let result = [];
    // for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    //     if (buckets[i].length > 0) {
    //         result.push(...buckets[i]);
    //     }
    // }

    // return result.slice(0, k);
      const count ={};

        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue(x => x.freq);

        for(let key in count){
            heap.enqueue({val:key, freq: count[key]});
            if(heap.size() > k) heap.dequeue();
        }

        const res = [];

        for(let i = 0; i < k; i++){
            const {val,freq} = heap.dequeue();
            res.push(parseInt(val))
        }

        return res;
};


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix[0].length;

    let heap = new MinPriorityQueue(x => x.val);

    for(let i = 0; i < n; i++){
        heap.push({val:matrix[i][0], row:i, col:0});
    }

    for(let j = 0; j < k - 1; j++){
        let {val,row,col} = heap.pop();
        if(col + 1 < n){
            heap.push({val:matrix[row][col + 1], row:row, col:col + 1})
        }
    }

    return heap.pop().val;
};

// space o(Min(n,k))
// time : O(n log(n))