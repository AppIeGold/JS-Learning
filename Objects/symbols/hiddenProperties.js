let user = {
    name: 'Vasya'
};

let id = Symbol('id');

user[id] = 1;

console.log(user[id]);
console.log(typeof user[id]);
console.log(user);