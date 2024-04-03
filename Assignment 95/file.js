function returnNumber(Numbers) {
    var newarray = Numbers.filter(function (number) { return number > 10; });
    return newarray;
}
console.log(returnNumber([7, 11, 90, 3, 78, 908, 1, 546]));
