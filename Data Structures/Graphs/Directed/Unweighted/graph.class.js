class Vertex {
    constructor(id) {
        this.id = id;
        this.adjacent = {}
    }

    getConnections() {
        return Object.keys(this.adjacent);
    }

    addAdjecentVertex(id, vrtx) {
        this.adjacent[id] = vrtx;
        return true;
    }

    removeAdjecentConnection(id) {
        delete this.adjacent[id];
    }

}

class Graph {
    constructor() {
        this.vrtxList = {};
    }

    addVertex(id) {
        if(typeof this.vrtxList[id] != 'undefined') return false;
        let newVrtx = new Vertex(id);
        this.vrtxList[id] = newVrtx;
        return true;
    }

    getVertex(id) {
        if(typeof this.vrtxList[id] == 'undefined') return false;
        return this.vrtxList[id];
    }

    deleteVertex(id) {
        if(typeof this.vrtxList[id] == 'undefined') return false;
        this.removeEdgesWithVertex(id); //  Firstly remove edges that point to the vertex.
        delete this.vrtxList[id]; // Remove vertex entirely.
    }

    addEdge(fromVrtxID, toVrtxID) {
        if(toVrtxID in this.vrtxList[fromVrtxID].getConnections()) return false;
        
        let toVrtx = this.getVertex(toVrtxID);
        this.vrtxList[fromVrtxID].addAdjecentVertex(toVrtxID, toVrtx);
        return true;
    }

    removeEdgesWithVertex(id) {
        if(this.vrtxList[id].getConnections().length === 0) return false; 

        // Remove the connections of all vertexes that point to the vertex we want to remove.
        for(let vrtxID in this.vrtxList) {
            let vrtxConnections = this.vrtxList[vrtxID].getConnections();
            if(vrtxConnections.includes(id)) 
                this.vrtxList[vrtxID].removeAdjecentConnection(id);    
        }
    }

    DepthFirstSearch(vrtxID, visited = []) {
        if(!this.vrtxList[vrtxID]) return false;

        visited.push( vrtxID );
        for(let neighborID in this.vrtxList[vrtxID].adjacent) {
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
            for(let neighborID in this.vrtxList[curNode].adjacent) {
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