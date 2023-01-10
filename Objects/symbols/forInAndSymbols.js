let id = Symbol('id');
let user = {
    name: 'Vasya',
    age: 25,
    [id]: 123
};

for (let key in user ) console.log(`${key}: ${user[key]}`); //Не работает

console.log(`---\n${user[id]}`); //А напрямую работает 