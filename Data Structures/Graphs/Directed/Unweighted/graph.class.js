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

}

class Graph {
    constructor() {
        this.vrtxList = {};
    }

    addVertex(id) {
        if(typeof this.vrtxList[id] != undefined) return false;
        let newVrtx = new Vertex(id);
        this.vrtxList[id] = newVrtx;
        return true;
    }

    getVertex(id) {
        if(typeof this.vrtxList[id] == undefined) return false;
        return this.vrtxList[id];
    }

    addEdge(fromVrtxID, toVrtxID) {
        if(typeof this.vrtxList[fromVrtxID].getConnections().contains(toVrtxID) != undefined) return false;
        let toVrtx = this.getVertex(toVrtxID);
        this.vrtxList[fromVrtxID].addAdjecentVertex(toVrtxID, toVrtx);
        return true;
    }

} // End of class