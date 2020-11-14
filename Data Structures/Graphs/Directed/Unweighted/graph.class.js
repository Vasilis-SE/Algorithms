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

    async deleteVertex(id) {
        if(typeof this.vrtxList[id] == 'undefined') return false;
        await this.removeEdgesWithVertex(id); //  Firstly remove edges that point to the vertex.
        delete this.vrtxList[id]; // Remove vertex entirely.
    }

    async addEdge(fromVrtxID, toVrtxID) {
        if(toVrtxID in this.vrtxList[fromVrtxID].getConnections()) return false;
        
        let toVrtx = await this.getVertex(toVrtxID);
        this.vrtxList[fromVrtxID].addAdjecentVertex(toVrtxID, toVrtx);
        return true;
    }

    async removeEdgesWithVertex(id) {
        if(this.vrtxList[id].getConnections().length === 0) return false; 

        // Remove the connections of all vertexes that point to the vertex we want to remove.
        for(let vrtxID in this.vrtxList) {
            let vrtxConnections = this.vrtxList[vrtxID].getConnections();
            if(vrtxConnections.includes(id)) 
                this.vrtxList[vrtxID].removeAdjecentConnection(id);    
        }
    }

} // End of class


module.exports = new Graph();