let user = {
    name: 'Vasya',
    age: 25,
    isAdmin: true
};

for (let prop in user) {
    console.log(prop);
    console.log(user[prop]); 
}