console.log("Before synchronous operation");
for (var i = 0; i < 1e9; i++) { }
console.log("After synchronous operation");
console.log("Before asynchronous operartion");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation");
