let user = {};

let weight = 70;
let key = 'weight';

user.name = 'Vasya';
user.age = 25;
user[key] = weight;

console.log('weight' in user);
console.log(user.noSuchProperty === undefined);
console.log(user.name !== undefined);
console.log('age' in user);
console.log('weight' in user);
console.log(key in user);
console.log(user);

