class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) 
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;

        if(this.adjacencyList[vertex1].indexOf(vertex2) === -1)
            this.adjacencyList[vertex1].push(vertex2);

        if(this.adjacencyList[vertex2].indexOf(vertex1) === -1)
            this.adjacencyList[vertex2].push(vertex1);

        return true;
    }

    removeEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;

        if(this.adjacencyList[vertex1].indexOf(vertex2) !== -1) {
            let edge1Idx = this.adjacencyList[vertex1].indexOf(vertex2);
            this.adjacencyList[vertex1].splice(edge1Idx, 1);
        }

        if(this.adjacencyList[vertex2].indexOf(vertex1) !== -1) {
            let edge2Idx = this.adjacencyList[vertex2].indexOf(vertex1);
            this.adjacencyList[vertex2].splice(edge2Idx, 1);
        }

        return true;
    }


}

module.exports = Graph;