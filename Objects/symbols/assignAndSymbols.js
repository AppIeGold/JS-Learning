let id = Symbol('id');
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

console.log(clone[id]);