class Vertex {
    constructor(id) {
        this.id = id;
        this.weight = 0;
        this.adjacent = {}
    }

    getConnections() {
        return Object.keys(this.adjacent);
    }



}

class Graph {
    constructor() {
        this.vertexList = {};
    }

    addVertex(id) {
        if(typeof this.vrtxList[id] != 'undefined') return false;
        let newVrtx = new Vertex(id);
        this.vrtxList[id] = newVrtx;
        return true;
    }


} // End of class


module.exports = new Graph();