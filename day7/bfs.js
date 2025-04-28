class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill(null).map(() => []);
    addEdge(v, w);
    {
      this.adj[v].push(w);
    }
  }
}

let g = new Graph(4);
