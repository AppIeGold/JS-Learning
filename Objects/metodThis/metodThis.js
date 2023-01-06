let user = {
    name: 'Vasya',
    age: 25,
    sayHi() {
        console.log(this.name);
    }
};

let admin = user;
user = null;

admin.sayHi();