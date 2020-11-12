const graph = require('./graph.class');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D'); 
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('B', 'E');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'A');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('G', 'D');


