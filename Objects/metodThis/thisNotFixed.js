let user = {name: 'Vasya'};
let admin = {name: 'Pete'};

function sayHi() {console.log(this.name)};

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
user['f']();
admin['f']();