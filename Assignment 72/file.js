{
    var mynames = ["jack", "xand", "wonk"];
    var ages = [71, 57, 83];
    console.log(mynames);
    console.log(ages);
}
try {
    console.log(mynames);
}
catch (error) {
    console.log("cannot access outside the block");
}
try {
    console.log(ages);
}
catch (error) {
    console.log("cannot access outside the block");
}
