const graph = require('./graph.class');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D'); 
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 3);
graph.addEdge('B', 'E', 1);
graph.addEdge('B', 'D', 2);
graph.addEdge('C', 'D', 1);
graph.addEdge('C', 'E', 4);
graph.addEdge('D', 'A', 2);
graph.addEdge('D', 'E', 2);
graph.addEdge('E', 'F', 3);
graph.addEdge('G', 'D', 1);

console.log(graph.dijkstras('A', 'E')); // A, B, E
console.log(graph.dijkstras('C', 'A')); // C, D, A
console.log(graph.dijkstras('A', 'G')); // False
console.log(graph.dijkstras('G', 'C')); // G, D, A, B, C
