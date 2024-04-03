function sum(num) {
    var sumNumbers = num.reduce(function (accumulator, current) { return accumulator + current; }, 0);
    return sumNumbers;
}
console.log(sum([3, 4, 2, 89, 64, 72]));
