const reverse = (str) => {
    if(str.length === 0) return "";
    return str.substr(str.length - 1) + reverse(str.substr(0, str.length - 1));
};

console.log( reverse('awesome') );
console.log( reverse('rithmschool') );