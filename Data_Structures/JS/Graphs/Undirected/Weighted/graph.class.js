const PriorityQueue = require('../../../Queues/Priority Queue/priority.Queues.Class');

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) 
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;

        if(this.adjacencyList[vertex1].indexOf(vertex2) === -1)
            this.adjacencyList[vertex1].push({'vertex': vertex2, 'weight': weight});

        if(this.adjacencyList[vertex2].indexOf(vertex1) === -1)
            this.adjacencyList[vertex2].push({'vertex': vertex1, 'weight': weight});

        return true;
    }

    dijkstras(startVertex, endVertex) {
        const priorityQueue = new PriorityQueue();
        let distances = {};
        let previous = {};
        let dequeuedVertex;
        let finalPath = [];

        // Setup distances object
        for(let vrtx in this.adjacencyList) {
            if(vrtx === startVertex) {
                distances[ vrtx ] = 0;
                priorityQueue.enqueue(vrtx, 0);
            } else {
                distances[ vrtx ] = Infinity;
                priorityQueue.enqueue(vrtx, Infinity);
            }

            previous[vrtx] = null;
        }

        while(priorityQueue.values.length > 0) {
            dequeuedVertex = priorityQueue.dequeue().value;

            if(dequeuedVertex === endVertex) {
                while(previous[dequeuedVertex]) {
                    finalPath.push( dequeuedVertex );
                    dequeuedVertex = previous[ dequeuedVertex ];
                }
                break;
            } 
            
            if( distances[ dequeuedVertex ] !== Infinity ) {
                this.adjacencyList[ dequeuedVertex ].forEach(neighbor => {
                    
                    let candidate = distances[ dequeuedVertex ] + neighbor.weight;
                    if(candidate < distances[ neighbor.vertex ]) {
                        // Update new distance from start to neighbor
                        distances[ neighbor.vertex ] = candidate;

                        // Update previous matrix that shows how we got to neighbor
                        previous[ neighbor.vertex ] = dequeuedVertex;

                        // Enqueue the neighbor with the priority of the distance for start until it self.
                        priorityQueue.enqueue(neighbor.vertex, candidate);
                    }
                });
            }

        }

        return [...startVertex, ...finalPath.reverse()];
    }

}

module.exports = Graph;