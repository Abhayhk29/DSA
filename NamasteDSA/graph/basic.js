/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (root) {
  if (!root) return null;

  let q = [root];
  let visited = new Map();
  let cloneNode = new Node(root.val);
  visited.set(root, cloneNode);

  while (q.length) {
    let curr = q.shift();
    for (let n of curr.neighbors) {
      if (!visited.has(n)) {
        q.push(n);
        visited.set(n, new Node(n.val));
      }
      let cloneCurr = visited.get(curr);
      cloneCurr.neighbors.push(visited.get(n));
    }
  }
  return cloneNode;
};

// main difference between bfs and dfs is the data structure used for traversal
// bfs uses queue where as dfs uses stack ( can be implemented using recursion also)
/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraphdfs = function (root) {
  if (!root) return null;

  let stack = [root];
  let visited = new Map();
  let cloneNode = new Node(root.val);
  visited.set(root, cloneNode);

  while (stack.length) {
    let curr = stack.pop();
    for (let n of curr.neighbors) {
      if (!visited.has(n)) {
        stack.push(n);
        visited.set(n, new Node(n.val));
      }
      let cloneCurr = visited.get(curr);
      cloneCurr.neighbors.push(visited.get(n));
    }
  }
  return cloneNode;
};

let recursivecloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (curr) => {
    // If node already cloned, return the clone
    if (visited.has(curr)) {
      return visited.get(curr);
    }

    // Create clone for current node
    const clone = new Node(curr.val);
    visited.set(curr, clone);

    // Recursively clone all neighbors
    for (let neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];

    map[x].push(y);
    map[y].push(x);
  }

  let q = [source];
  let visited = new Set();
  visited.add(source);

  while (q.length) {
    let curr = q.shift();
    if (curr === destination) return true;
    for (let neigh of map[curr]) {
      if (!visited.has(neigh)) {
        q.push(neigh);
        visited.add(neigh);
      }
    }
  }

  return false;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];

    map[x].push(y);
    map[y].push(x);
  }

  let visited = new Set();
  let dfs = (curr) => {
    if (curr == destination) {
      return true;
    }

    visited.add(curr);
    for (let neigh of map[curr]) {
      if (!visited.has(neigh)) {
        if (dfs(neigh)) {
          return true;
        }
      }
    }
    return false;
  };

  return dfs(source);
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let start = 0;
  let end = graph.length - 1;

  let ans = [];
  const dfs = (curr, path) => {
    if (curr === end) {
      ans.push([...path]);
      return;
    }

    for (let neigh of graph[curr]) {
      path.push(neigh);
      dfs(neigh, path);
      path.pop();
    }
  };

  dfs(0, [0]);
  return ans;
};

function topologicalSort() {
  const n = 6;
  const adj = [[], [], [3], [1], [0, 1], [0, 2]];
  let visited = new Set();
  let ans = [];

  const dfs = (curr) => {
    visited.add(curr);
    for (let neigh of adj[curr]) {
      if (!visited.has(neigh)) {
        dfs(neigh);
      }
    }
    ans.push(curr);
  };

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();
}

function topologicalSortKahn() {
  const n = 6;
  const adj = [[], [], [3], [1], [0, 1], [0, 2]];

  let indegree = new Array(n).fill(0);
  // create indegree array
  for (let i = 0; i < n; i++) {
    for (let neigh of adj[i]) {
      indegree[neigh]++;
    }
  }

  let q = [];
  let ans = [];

  // push all 0 indegree nodes to queue
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    let curr = q.shift();
    ans.push(curr);
    for (let neigh of adj[curr]) {
      indegree[neigh]--;
      if (indegree[neigh] === 0) {
        q.push(neigh);
      }
    }
  }

  return ans;
}

const graph = [[1, 2], [3], [4], [5], [3], []];

function shortestDistance(graph, src) {
  let n = graph.length;
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let q = [src];

  while (q.length) {
    let curr = q.shift();
    for (let neigh of graph[curr]) {
      if (dist[neigh] == Infinity) {
        dist[neigh] = dist[curr] + 1;
        q.push(neigh);
      }
    }
  }
  return dist;
}

function shortestDistance2(graph, src) {
  let n = graph.length;
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let q = [src];

  while (q.length) {
    let curr = q.shift();
    for (const neigh of graph[curr]) {
      if (dist[neigh] == Infinity) {
        dist[neigh] = dist[curr] + 1;
        q.push(neigh);
      }
    }
  }

  return dist;
}
// time complexity is o(V + E) where v is number of vertices and e is number of edges
// space complexity is o(V) for dist array and queue

function shortestDistancePath(graph, src, dest) {
  let n = graph.length;
  const dist = new Array(n).fill(Infinity);
  const parent = new Array(n).fill(-1);
  dist[src] = 0;
  parent[src] = null;

  let q = [src];
  while (q.length) {
    let curr = q.shift();
    for (let neigh of graph[curr]) {
      if (dist[neigh] == Infinity) {
        dist[neigh] = dist[curr] + 1;
        parent[neigh] = curr;
        q.push(neigh);
      }
    }
  }
  if (dist[dest] == Infinity) {
    return [];
  }
  let path = [];
  let curr = dest;
  while (curr != null) {
    path.push(curr);
    curr = parent[curr];
  }
  path.reverse();
  return path;
}
// time complexity is o(V + E) where v is number of vertices and e is number of edges
// space complexity is o(V) for dist array , parent array and queue

// console.log(shortestDistancePath(graph,0,5));

// class MinHeap {
//     constructor(){
//         // this.heap = [5, 10, 20, 30]
//         this.heap = []
//     }

//     getLeftChildIndex(i){
//         return (2 * i) + 1;
//     }

//     getRightChildIndex(i){
//         return (2 * i) + 2
//     }
//     // formula for getting the parent index
//     getParentIndex(i){
//         return Math.floor((i - 1) / 2);
//     }

//     // o(log(n)
//     insert(val){
//          this.heap.push(val);
//          let lastIndex = this.heap.length - 1;
//          this.heapifyUp(lastIndex);
//     }

//     heapifyUp(i){
//         while (i > 0) {
//             let parentIndex = this.getParentIndex(i);
//             if(this.heap[i] < this.heap[parentIndex]){
//                 [this.heap[i],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[i]]
//                 i = parentIndex;
//             }else{
//                 break;
//             }
//         }
//     }

//     extract(){
//         let min = this.heap[0];
//         let lastIndex = this.heap.length - 1;

//         [this.heap[0],this.heap[lastIndex]] = [this.heap[lastIndex],this.heap[0]]

//         this.heap.pop();
//         this.heapifyDown(0);

//         return min;

//     }

//     heapifyDown(i){
//         let left = this.getLeftChildIndex(i);
//         let right = this.getRightChildIndex(i);
//         let n = this.heap.length;

//         let smallest = i;

//         if(left < n && this.heap[left] < this.heap[smallest]){
//             smallest = left
//         }

//         if(right < n && this.heap[right] < this.heap[smallest]){
//             smallest = right
//         }

//         if(smallest != i){
//             [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
//             this.heapifyDown(smallest);
//         }

//     }

//     peek(){
//         if(!this.heap.length) return null;

//         return this.heap[0];
//     }

//     size(){
//         return this.heap.length;
//     }
// }

class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  size() {
    return this.heap.length;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(pair) {
    this.heap.push(pair);
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[i][0] < this.heap[this.parent(i)][0]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let i = 0;
    while (true) {
      let smallest = i;
      let left = this.left(i);
      let right = this.right(i);

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }
}

const graph2 = [
  [
    [1, 2],
    [2, 4],
  ], // [node ,weigh]
  [
    [3, 7],
    [2, 1],
  ],
  [
    [4, 3],
    [5, 1],
  ],
  [[6, 1]],
  [
    [3, 2],
    [6, 5],
  ],
  [
    [3, 3],
    [6, 8],
  ],
  [],
];

function dijkstras(graph, src) {
  let n = graph.length;
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let pq = new MinHeap();
  pq.push([src, 0]);

  while (pq.size()) {
    let [node, nodeDist] = pq.pop();

    if (nodeDist > dist[node]) continue;

    for (const [neighbor, edgeWeight] of graph[node]) {
      let newDist = dist[node] + edgeWeight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([neighbor, newDist]);
      }
    }
  }
  return dist;
}

// console.log(dijkstras(graph2, 0));

const edges = [
  //[u, v, w]
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [3, 5, -1],
  [4, 6, 3],
  [5, 6, 3],
];


let negEdges = [
    [0, 1, 4],
    [1, 2, -1],
    [2, 3, -2],
    [3, 1, 0]
]

function bellmanFord(edges,v,src){
    let dist  = new Array(v).fill(Infinity);

    dist[src] = 0;

    for(let i = 0; i < v - 1; i++){
        // relax all edges
        let updated = false;
        for(let[u,v,w] of edges){
            if( dist[u] != Infinity && dist[u] + w < dist[v]){
                 dist[v] = dist[u] + w;
                 updated = true;
            }
        }
        if(!updated) break;
    }

    for(let[u,v,w] of edges){
            if( dist[u] != Infinity && dist[u] + w < dist[v]){
                 console.log("negative cycle detected")
                 return null;;
            }
    }
    return dist;

}


console.log(bellmanFord(edges,7,0))
console.log(bellmanFord(negEdges,7,0))