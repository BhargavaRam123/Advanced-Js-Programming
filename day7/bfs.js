class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill(null).map(() => []);
    addEdge(v, w);
    {
      this.adj[v].push(w);
    }
    bfs();
    {
      let visited = new Array(this.V).fill(false);
      for (let i = 0; i < this.V; i++) {
        if (!visited[i]) {
          let queue = [];
          visited[i] = true;
          queue.push(i);
          while (queue.length !== 0) {
            let s = queue.shift();
            console.log("visited", s);
            for (let n of this.adf[s]) {
              if (!visited[n]) {
                visited[n] = true;
                queue.push(n);
              }
            }
          }
        }
      }
    }
  }
}

let g = new Graph(4);
