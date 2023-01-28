let styles = ['jazz', 'bluz'];

styles.push('rock-n-roll');

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

styles.unshift('rap', 'raggy');

console.log(styles);


let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();