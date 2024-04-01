function getquotientandremainder(num1, num2) {
    var quotient = Math.ceil(num1 / num2);
    var remainder = num1 % num2;
    return { quotient: quotient, remainder: remainder };
}
console.log(getquotientandremainder(5, 2));
