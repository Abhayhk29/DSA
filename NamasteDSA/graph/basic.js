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
var cloneGraph = function(root) {
    if(!root) return null;

    let q = [root];
    let visited = new Map();
    let cloneNode = new Node(root.val);
    visited.set(root, cloneNode);

    while(q.length){
        let curr = q.shift();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                q.push(n);
                visited.set(n, new Node(n.val))
            }
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneNode
};


// main difference between bfs and dfs is the data structure used for traversal
// bfs uses queue where as dfs uses stack ( can be implemented using recursion also)
/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraphdfs = function(root) {
    if(!root) return null;

    let stack = [root];
    let visited = new Map();
    let cloneNode = new Node(root.val);
    visited.set(root, cloneNode);

    while(stack.length){
        let curr = stack.pop();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                stack.push(n);
                visited.set(n, new Node(n.val))
            }
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneNode
};


let recursivecloneGraph = function(node){
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
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let map = {};
    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];

        map[x].push(y)
        map[y].push(x)
    }

    let q = [source];
    let visited = new Set();
    visited.add(source);

    while(q.length){
        let curr = q.shift();
        if(curr === destination) return true;
        for(let neigh of map[curr]){
            if(!visited.has(neigh)){
                q.push(neigh);
                visited.add(neigh)
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
var validPath = function(n, edges, source, destination) {
    let map = {};
    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];

        map[x].push(y)
        map[y].push(x)
    }

    let visited = new Set();
    let dfs = (curr) => {
        if(curr == destination){
            return true;
        }

        visited.add(curr);
        for(let neigh of map[curr]){
            if(!visited.has(neigh)){
                if(dfs(neigh)){
                    return true;
                }
            }
        }
        return false;
    }

    return dfs(source);
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let start = 0;
    let end = graph.length - 1;

    let ans = [];
    const dfs = (curr, path) =>{
        if(curr === end){
            ans.push([...path])
            return;
        }

        for(let neigh of graph[curr]){
            path.push(neigh);
            dfs(neigh, path);
            path.pop()
        }
    }

    dfs(0,[0])
    return ans;
};


function topologicalSort() {
    const n = 6;
    const adj = [
        [],
        [],
        [3],
        [1],
        [0,1],
        [0,2],
    ]
    let visited = new Set();
    let ans = [];

    const dfs = (curr) =>{
        visited.add(curr);
        for(let neigh of adj[curr]){
            if(!visited.has(neigh)){
                dfs(neigh);
            }
        }
        ans.push(curr);
    }

    for(let i =0;i<n;i++){
        if(!visited.has(i)){
            dfs(i);
        }
    }   
    
    return ans.reverse();

}

function topologicalSortKahn() {
    const n = 6;
    const adj = [
        [],
        [],
        [3],
        [1],
        [0,1],
        [0,2],
    ]

    let indegree = new Array(n).fill(0);
    // create indegree array
    for(let i =0;i<n;i++){
        for(let neigh of adj[i]){
            indegree[neigh]++;
        }
    }

    let q = [];
    let ans = [];

    // push all 0 indegree nodes to queue
    for(let i =0;i<n;i++){
        if(indegree[i] === 0){
            q.push(i);
        }
    }

    while(q.length){
        let curr = q.shift();
        ans.push(curr);
        for(let neigh of adj[curr]){
            indegree[neigh]--;
            if(indegree[neigh] === 0){
                q.push(neigh);
            }
        }
    }

    return ans;
}


const graph = [
    [1,2],
    [3],
    [4],
    [5],
    [3],
    []
]


function shortestDistance(graph,src){
    let n = graph.length;
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let q = [src];

    while(q.length){
        let curr = q.shift();
        for(let neigh of graph[curr]){
            if(dist[neigh] == Infinity){
                dist[neigh] = dist[curr] + 1;
                q.push(neigh);
            }   
        }
    }
    return dist;
}
// time complexity is o(V + E) where v is number of vertices and e is number of edges
// space complexity is o(V) for dist array and queue


function shortestDistancePath(graph,src,dest){
    let n = graph.length;
    const dist = new Array(n).fill(Infinity);
    const parent = new Array(n).fill(-1);
    dist[src] = 0;
    parent[src] = null;

    let q = [src];
    while(q.length){
        let curr = q.shift();
        for(let neigh of graph[curr]){
            if(dist[neigh] == Infinity){
                dist[neigh] = dist[curr] + 1;
                parent[neigh] = curr;
                q.push(neigh);
            }
        }
    }
    if(dist[dest] == Infinity){
        return [];
    }
    let path = [];
    let curr = dest;
    while(curr != null){
        path.push(curr);
        curr = parent[curr];
    }
    path.reverse();
    return path;
}
// time complexity is o(V + E) where v is number of vertices and e is number of edges
// space complexity is o(V) for dist array , parent array and queue