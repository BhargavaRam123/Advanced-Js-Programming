class graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill(null).map(() => []);
  }
  addEdge(v, w) {
    this.adj[v].push(w);
  }
  dfs() {
    let visited = new Array(this.v).fill(false);
    for (let i = 0; i < this.v; i++) {
      visited[i] = true;
      console.log("visited node is ", i);
      let st = [];
      while (st.length !== 0) {
        for (let n of this.adj[i]) {
          let e = st.pop();
          console.log("visited node ", e);
          if (!visited[n]) {
            st.push(n);
            visited[n] = true;
          }
        }
      }
    }
  }
}
