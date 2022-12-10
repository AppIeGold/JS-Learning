describe('Проверка на простое натуральное число', function() {
    
    function fanc(x) {
        let numb = x
        it (`число ${numb}`, function() {
            assert.equal(isPrimes(x), true);
        });
    }
    
    for(x = 1; x <= 1000; x++) {
        fanc(x);
    }
});