function swapvalues() {
    var a = 5;
    var b = 10;
    console.log("before swap, a is: ", a, "and b is: ", b);
    var temporaryvariable = a;
    a = b;
    b = temporaryvariable;
    console.log("after swap, a is: ", a, "and b is: ", b);
}
swapvalues();
