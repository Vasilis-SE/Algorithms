const Graph = require('./graph.class');
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log( JSON.stringify(g.adjacencyList,null,5) );

console.log("----------------------");
console.log("Recursive DFS: ");
console.log("\t" + g.DFS_Recursive("A"));
console.log("----------------------");
console.log("Iterative DFS: ");
console.log("\t" + g.DFS_Iterative("A"));
console.log("----------------------");
console.log("Recursive BFS: ");
console.log("\t" + g.BFS_Recursice("A"));