console.log('z'.codePointAt());
console.log('Z'.codePointAt());

console.log('\n');

console.log(String.fromCodePoint(122));
console.log(String.fromCodePoint(90));

console.log('\n');

let str = '';

for (let i = 65; i <= 122; i++) {
    str += `${String.fromCodePoint(i)}, `;
}

console.log(str);