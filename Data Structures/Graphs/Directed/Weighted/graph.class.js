class Vertex {
    constructor(id) {
        this.id = id;
        this.adjacent = {}
    }

    getConnections() {
        return Object.keys(this.adjacent);
    }

    addAdjecentVertex(id, vrtx, weight) {
        this.adjacent[id] = {'vertex': vrtx, 'weight': weight};
        return true;
    }

    removeAdjecentConnection(id) {
        delete this.adjacent[id];
    }
}

class Graph {
    constructor() {
        this.vertexList = {};
    }

    addVertex(id) {
        if(typeof this.vertexList[id] != 'undefined') return false;
        let newVrtx = new Vertex(id);
        this.vertexList[id] = newVrtx;
        return true;
    }

    getVertex(id) {
        if(typeof this.vertexList[id] == 'undefined') return false;
        return this.vertexList[id];
    }

    deleteVertex(id) {
        if(typeof this.vertexList[id] == 'undefined') return false;
        this.removeEdgesWithVertex(id); //  Firstly remove edges that point to the vertex.
        delete this.vertexList[id]; // Remove vertex entirely.
    }

    addEdge(fromVrtxID, toVrtxID, weight) {
        if(toVrtxID in this.vertexList[fromVrtxID].getConnections()) return false;
        
        let toVrtx = this.getVertex(toVrtxID);
        this.vertexList[fromVrtxID].addAdjecentVertex(toVrtxID, toVrtx, weight);
        return true;
    }

    removeEdgesWithVertex(id) {
        if(this.vertexList[id].getConnections().length === 0) return false; 

        // Remove the connections of all vertexes that point to the vertex we want to remove.
        for(let vrtxID in this.vertexList) {
            let vrtxConnections = this.vertexList[vrtxID].getConnections();
            if(vrtxConnections.includes(id)) 
                this.vertexList[vrtxID].removeAdjecentConnection(id);    
        }
    }

    DepthFirstSearch(vrtxID, visited = []) {
        if(!this.vertexList[vrtxID]) return false;

        visited.push( vrtxID );
        for(let neighborID in this.vertexList[vrtxID].adjacent) {
            if(!visited.includes(neighborID)) 
                this.DepthFirstSearch(neighborID, visited);
        }

        return visited;
    }

    BreadthFirstSearch(vrtxID) {
        let visited = [];
        let queue = [vrtxID];
       
        let helper = () => {
            // Dequeue element and push to visited
            let curNode = queue.shift();
            visited.push(curNode);

            // If a value was not visited and is not in queue, add to queue
            for(let neighborID in this.vertexList[curNode].adjacent) {
                if (!visited.includes(neighborID) && !queue.includes(neighborID)) 
                    queue.push(neighborID);
            }
     
            // If there are elements to be visited -> Recursive Call
            if(queue.length) helper();
        }
       
        helper();
        return visited;
    }





    
} // End of class


module.exports = new Graph();