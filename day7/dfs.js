class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill(null).map(() => []);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  dfs() {
    let visited = new Array(this.v).fill(false);

    // Run DFS from each unvisited vertex
    for (let i = 0; i < this.v; i++) {
      if (!visited[i]) {
        this.dfsUtil(i, visited);
      }
    }
  }

  dfsUtil(vertex, visited) {
    // Mark the current node as visited and print it
    visited[vertex] = true;
    console.log("Visited node:", vertex);

    // Recur for all adjacent vertices
    for (let neighbor of this.adj[vertex]) {
      if (!visited[neighbor]) {
        this.dfsUtil(neighbor, visited);
      }
    }
  }
}

// Create a graph and test
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.dfs();
