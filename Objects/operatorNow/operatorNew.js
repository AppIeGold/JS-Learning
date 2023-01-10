function User(name) {
    
    if (!new.target) {   //bad practic
        return new User(name);
    }

    this.name = name;

    if (name === 'Vasya') {
        this.isAdmin = true;
    } else this.isAdmin = false;
}

let user1 = User('Jack');
let user2 = User('Vasya');
let user3 = new User('Sasha');
let user4 = new User('Petr');

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
console.log(user4.name);
console.log(user2.isAdmin);
console.log(user1.isAdmin);