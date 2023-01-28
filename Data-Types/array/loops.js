let arr = ['apple', 'orange', 'pear'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let fruits = ['apple, orange, melon'];

for (let fruit of fruits) {
    console.log('\n', fruit);
}

for (let key in fruits) {
    console.log(fruits[key]);
}

console.log('\n');

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]);
console.log(matrix[0][2]);