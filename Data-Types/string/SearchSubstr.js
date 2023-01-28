let str = 'Widget with id ';

console.log(`Позиция, где найдено совпадение: ${str.indexOf('Widget')}`);
console.log(`Позиция, где найдено совпадение: ${str.indexOf('widget')}`); // Совпадение не найдено из-за чувствительности к регистру.
console.log(`Позиция, где найдено совпадение: ${str.indexOf('id')}`);
console.log(`Позиция, где найдено совпадение: ${str.indexOf('id', 2)}`); // Второй аргумент необязателен и начинается поиск с обозначеной позиции.


let target = 'id';

let pos = 0;

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos === -1) break;

    console.log(`искомое \'${target}\' найдено тут: ${foundPos}`);
    pos = foundPos + 1;
}

let pos1 = -1
while ((pos1 = str.indexOf(target, pos1 + 1)) != -1) { // Более короткая запись варианта выше
    console.log(pos1);
}

console.log('\t');

console.log('Widget with id'.includes('Widget'));
console.log('Widget with id'.includes('widget')); // Возвращает true false
console.log('Widget with id'.includes('id', 2));

console.log('\t');

console.log('Widget'.startsWith('Wid')); // true false если начинается с указанных символов.
console.log('Widget'.endsWith('get')); // true false если заканчивается с указанных символов.
