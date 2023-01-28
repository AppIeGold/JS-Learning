(function ucFirst(str) {
    if(!str) return str;
    let str2 = str[0].toUpperCase();
    str = str2 + str.slice(1);
    return str;
})('')