let codes = {
    '+7': 'Россия',
    '+41': 'Швейцария',
    '+44': 'Великобритания',
    '+1': 'США'
};

for (let code in codes) {
    console.log(code);
    console.log(codes[code]);
}

console.log( String(Math.trunc(Number('49'))) );
console.log( String(Math.trunc(Number('+49'))) );
console.log( String(Math.trunc(Number('1.2'))) );