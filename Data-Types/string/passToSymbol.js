let str = 'hello';

console.log(str[0]);
console.log(str.at(0));
console.log(str[str.length - 1]); // без метода at получить символ можно только таким способом.
console.log(str.at(-1) + '\n');

for (let char of 'hello') {
    console.log(char);
}

console.log('\n');

for (key in str) {
    console.log(str[key]);
}