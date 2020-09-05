class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let _WP = 31;
        for(let i=0; i< Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * _WP + value) % this.keyMap.length;
        }
    
        return total;
    }

    // Set value with generated hash key using Sepatate Chaining method.
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index])
            this.keyMap[index] = [];

        this.keyMap[index].push([key, value]);
    }

    // Set value with generated hash key using Sepatate Chaining method.
    get(key) {
        let index = this._hash(key);
        if(!this.keyMap[index]) return undefined;
        
        for(let keyValPair in this.keyMap[index]) {
            if(keyValPair[0] === key) return this.keyMap[index];
        }

        return undefined;
    }

}

module.exports = HashTable;