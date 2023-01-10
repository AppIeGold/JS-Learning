let id = Symbol.for('id');
let idAgain = Symbol.for('id');
console.log(id === idAgain);

let sym = Symbol.for('name');
let sym2 = Symbol.for('age');
console.log('---\n' + Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

let globalSymbol = Symbol.for('Symbol');
let localSymbol = Symbol('Symbol');

console.log('---\n' + Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol)); //Потому что не глобальный
console.log(localSymbol.description);
console.log(globalSymbol.description);
