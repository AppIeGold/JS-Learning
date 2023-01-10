function Accumulator(value1) {
    this.value = value1;
    this.valueIn = this.value;
    this.read = function name() {
        this.valueIn += this.value; 
    };
}

let accumulator = new Accumulator(2);
console.log(accumulator.valueIn);
accumulator.read();
console.log(accumulator.valueIn);
accumulator.read();
console.log(accumulator.valueIn);


/*function Calculator() {

    this.read = function(var1, var2) {
      this.a = var1;
      this.b = var2;
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read(4, 5);
  
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );
  */