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

    addEdge(fromVrtxID, toVrtxID, weight) {
        if(toVrtxID in this.vertexList[fromVrtxID].getConnections()) return false;
        
        let toVrtx = this.getVertex(toVrtxID);
        this.vertexList[fromVrtxID].addAdjecentVertex(toVrtxID, toVrtx, weight);
        return true;
    }



} // End of class


module.exports = new Graph();