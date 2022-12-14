function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
        obj[key] *= 2;
        }
    }
}

module.exports = multiplyNumeric;