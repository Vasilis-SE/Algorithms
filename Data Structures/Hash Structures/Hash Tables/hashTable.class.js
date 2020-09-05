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
        
        for(let keyValPair of this.keyMap[index]) 
            if(keyValPair[0] === key) return keyValPair;
        
        return undefined;
    }

    keys() {
        let keysList = [];

        for(let index in this.keyMap) 
            for(let keyValPair of this.keyMap[index]) 
                if(!keysList.includes(keyValPair[0])) 
                    keysList.push(keyValPair[0]);
        
        return keysList;
    }

    values() {
        let valuesList = [];

        for(let index in this.keyMap) 
            for(let keyValPair of this.keyMap[index]) 
                if(!valuesList.includes(keyValPair[1])) 
                    valuesList.push(keyValPair[1]);
        
        return valuesList;
    }

}

module.exports = HashTable;