const stringifyNumbers = (obj) => {
    const final = Object.assign({}, obj);

    for (const key in final) {
        console.log(key, typeof final[key]);
        if (Object.prototype.hasOwnProperty.call(final, key)) {
            if (typeof final[key] === 'number') final[key] = final[key].toString();
            
            if (typeof final[key] === 'object' && !Array.isArray(final[key])) final[key] = stringifyNumbers(final[key]);
            else if (typeof final[key] === 'object' && Array.isArray(final[key])) final[key] = final[key];
        }
    }
  
    return final;
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

console.log( stringifyNumbers(obj) );
