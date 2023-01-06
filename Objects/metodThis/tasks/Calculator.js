let calculator = {
    read(property1, property2) {
        this.value1 = property1;
        this.value2 = property2;
    },

    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }
};

calculator.read(4, 5);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

let calc = calculator;
calculator = null;

calc.read(12, 5);
console.log(calc.sum());