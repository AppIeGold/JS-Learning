let arr1 = new Array();
let arr2 = []; // Этот синтаксис используется чаще

let fruits = ['apple', 'banana', 'orange'];

fruits[2] = 'melon'; //Теперь не апельсин, а арбуз.

console.log(fruits.length);
console.log(fruits.at(-1)); // получаем последний элемент массива

let arr3 = ['apple', {name: 'John'}, true, function() { console.log('hello');}];

arr3[3]();
console.log(arr3[1].name);
console.log(arr3[1].name);