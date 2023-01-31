/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };

  this.sum1 = function () {
    return this.a * this.b;
  };

  this.mul2 = function () {
    return this.a / this.b;
  };

  this.sum3 = function () {
    return this.a + this.b;
  };

  this.mul4 = function () {
    return this.a - this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum1=" + calculator.sum1());
alert("Mul2=" + calculator.mul2());
alert("Sum3=" + calculator.sum3());
alert("Mul4=" + calculator.mul4());
