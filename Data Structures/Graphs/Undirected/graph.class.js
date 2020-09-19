const Stack = require('../../Stack/stack.class');

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

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return false;

        // Remove edges of the vertex to be removed.
        for(const v of this.adjacencyList[vertex]) 
            this.removeEdge(v, vertex);

        // Remove the unedged vertex from the graph.
        delete this.adjacencyList[vertex];
        return true;
    }

    DFS_Recursive(vertex = "", results = []) {
        if(!this.adjacencyList[vertex]) return false;
        
        results.push(vertex);
        for(let vtx of this.adjacencyList[vertex]) 
            if(results.indexOf(vtx) === -1) 
                this.DFS_Recursive(vtx, results);
            
        return results;
    }

    DFS_Iterative(vertex = "") {
        let stack = new Stack();
        let results = [];

        stack.push( vertex );
        while(stack.size !== 0) {
            let stackVertexNode = stack.pop();

            // Vertex is not visited
            if(results.indexOf(stackVertexNode.value) === -1) {
                results.push(stackVertexNode.value);
                for(let vtx of this.adjacencyList[stackVertexNode.value]) {
                    stack.push(vtx);
                }
            }
        }

        return results;
    }

    BFS_Recursice(vertex = "") {
        let visited = [];
        let queue = [vertex];
       
        let helper = () => {
          // Dequeue element and push to visited
          let curNode = queue.shift();
          visited.push(curNode);
          // If a value was not visited and is not in queue, add to queue
          this.adjacencyList[curNode].forEach((node) => {
            if (!visited.includes(node) && !queue.includes(node)) {
              queue.push(node);
            }
          });
          // If there are elements to be visited -> Recursive Call
          if(queue.length) helper();
        }
       
        helper();
        return visited;
    }

}

module.exports = Graph;