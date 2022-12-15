let user = {name: 'Vasya'};

let permission1 = { canView: true};
let permission2 = { canEdit: true};

Object.assign(user, permission1, permission2);

console.log(user);
console.log(permission1);
console.log(permission2);

Object.assign(user, {canView: false});

console.log(user);