// class Graph {
//   constructor(v) {
//     this.V = v;
//     this.adj = new Array(v).fill(null).map(() => []);
//   }
//   addEdge(v, w) {
//     this.adj[v].push(w);
//   }
//   bfs() {
//     let visited = new Array(this.V).fill(false);
//     for (let i = 0; i < this.V; i++) {
//       if (!visited[i]) {
//         let queue = [];
//         visited[i] = true;
//         queue.push(i);
//         while (queue.length !== 0) {
//           let s = queue.shift();
//           console.log("visited", s);
//           for (let n of this.adj[s]) {
//             if (!visited[n]) {
//               visited[n] = true;
//               queue.push(n);
//             }
//           }
//         }
//       }
//     }
//   }
// }

// let g = new Graph(4);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(1, 2);
// // g.addEdge(1, 3);
// g.addEdge(2, 3);
// g.bfs();

class bfs {
  constructor() {
    this.adjacencylist = {};
  }
  addvertex(v) {
    this.adjacencylist[v] = [];
  }
  addedge(v, w) {
    this.adjacencylist[v].push(w);
    this.adjacencylist[w].push(v);
  }
  bfstraversal(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    while (queue.length > 0) {
      let value = queue.shift();
      visited[value] = true;
      result.push(value);
      this.adjacencylist[value].forEach((element) => {
        if (!visited[element]) value.push(element);
      });
    }
  }
}
