var traditionalFunction = function (num1, num2) {
    return num1 * num2;
};
// convert into arrow function
var arrFunction = function (num1, num2) { return num1 - num2; };
console.log(traditionalFunction(2, 10));
console.log(arrFunction(9, 7));
