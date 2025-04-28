class graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill(null).map(() => []);
  }
  addEdge(v, w) {
    this.adj[v].push(w);
  }
  dfs() {}
}
