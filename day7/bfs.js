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

class graph {
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
    visited[start] = true;
    while (queue.length > 0) {
      let value = queue.shift();
      // console.log("value is ", value);
      result.push(value);
      this.adjacencylist[value].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }
    return result;
  }
}
const g = new graph();
g.addvertex("1");
g.addvertex("2");
g.addvertex("3");
g.addvertex("4");
g.addvertex("5");
g.addvertex("6");
g.addvertex("10");
g.addvertex("11");
g.addedge("1", "2");
g.addedge("1", "6");
g.addedge("2", "4");
g.addedge("2", "3");
g.addedge("6", "10");
g.addedge("4", "11");
g.addedge("10", "11");
g.addedge("3", "5");
const l = g.bfstraversal("1");
console.log("result array:", l);
