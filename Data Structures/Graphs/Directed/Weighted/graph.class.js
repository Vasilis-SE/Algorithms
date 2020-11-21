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


} // End of class


module.exports = new Graph();