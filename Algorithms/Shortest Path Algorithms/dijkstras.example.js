const WeightedGraph = require('../../Data Structures/Graphs/Undirected/Weighted/graph.class');
const wg = new WeightedGraph();


// priorityQueue.enqueue('B', 3);
// priorityQueue.enqueue('C', 5);
// priorityQueue.enqueue('D', 2);
// priorityQueue.enqueue('Q', 20);
// priorityQueue.enqueue('E', 1);
// priorityQueue.enqueue('Z', 4);



wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("F", "E", 1);


console.log(wg.dijkstras("A", "E"));

