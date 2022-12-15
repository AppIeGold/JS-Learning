let user = {
    name: 'Vasya',
    sizes: {
        wigdt: 50,
        height: 190
    }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes);

user.sizes.wight = 60;

console.log(clone.sizes.wight);