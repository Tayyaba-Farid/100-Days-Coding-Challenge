function executeCallback(callback, num1, num2) {
    callback(num1, num2);
}
var addNumbers = function (num1, num2) {
    console.log(num1 + num2);
};
executeCallback(addNumbers, 5, 5);
