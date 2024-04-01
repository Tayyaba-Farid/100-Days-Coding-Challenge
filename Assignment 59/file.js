function customAdder(specialnumber) {
    return function (numbertoadd) {
        return specialnumber + numbertoadd;
    };
}
var adder = customAdder(2);
console.log(adder(10));
console.log(adder(100));
console.log(adder(15));
