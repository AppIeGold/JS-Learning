//function sum(a, b) {
//    return(a * b);
//}
//
//let result = BigInt(sum(344564564567676767657567, 235));
//console.log(result);
//
//
//function counter(var1) {
//    for (let count = 1; ; count++) {
//        console.log(count + 'A');
//            if (count === 5) return; 
//            console.log(count + 'B');
//        }      
//}
//
//counter('complete');
//
///////////////////////////////////////////////////////////////////////////////////////////////
//
//function checkAge(age) {
//    if (age >= 18) {
//        return true;
//    } else {
//        return//console.log('Did your parents give you permission?');
//    }
//}
//
//let age = 16;
//if(checkAge(age)) {
//    console.log('welcome');
//} else console.log('not current age');

///////////////////////////////////////////////////////////////////////////////////////////

//function doNothing() {return}
//function doNothing2() {}
//console.log( doNothing() && doNothing2());

//////////////////////////////////////////////////////////////////////////////////////////////

//function showPrimes(n) {
//    for(let i = 2; i < n; i++) {
//        if (!isPrime(i)) continue;
//        console.log(i);
//    }
//}
//
//function isPrime(n) {
//    for (let i =2; i < n; i++) {
//        if (n % i == 0) return false;
//    }
//    return true;
//}
//
//showPrimes(10)



function minNum(num1, num2) {
    return num1 ** num2
}

console.log(minNum(3, 2));




//let count = 1;
//while (count) {
//    console.log(count + 'AA');
//        if (count === 5) return;
//    console.log(count + 'BB');
//        if (count === 4) return;
//    console.log(count + 'CC');
//        if (count === 3) return;
//    count++    
//}
//
//do {
//    console.log(count + 'AA');
//    if (count === 5) return;
//console.log(count + 'BB');
//    if (count === 4) return;
//console.log(count + 'CC');
//    if (count === 3) return;
//count++     
//} while (count);