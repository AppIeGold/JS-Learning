let str = 'stringify';

console.log(str.slice(0, 5));
console.log(str.slice(0, 1));
console.log(str.slice(2));
console.log(str.slice(-4, -1));

console.log('\n');

console.log(str.substring(2, 6));
console.log(str.substring(6, 2)); // в substring отрицательные значение интерпритируются как 0.

console.log('\n');

console.log(str.substr(2, 4)); // Второе свойство задает длину для от первого свойства, а не конечную позицию в строке.