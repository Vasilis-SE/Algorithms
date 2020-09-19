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

}

module.exports = Graph;