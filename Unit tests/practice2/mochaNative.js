function showPrimes(n) {
    for(let i = 2; i <= n; i++) {
        if (!inside(i)) continue;
        console.log(i);                    
    }       
}

function isPrimes(i) {
    for(let j = 2; j < i; j++) {
        if (i % j == 0) return false;
    }
    if (i > 1) return true;
}


module.exports = isPrimes;