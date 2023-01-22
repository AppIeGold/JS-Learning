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

let style = ['jazz', 'bluz'];

style.push('rock-n-roll');