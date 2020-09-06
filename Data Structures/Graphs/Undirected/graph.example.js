const Graph = require('./graph.class');
const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");

g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Aspen");

console.log( JSON.stringify(g.adjacencyList,null,2) );