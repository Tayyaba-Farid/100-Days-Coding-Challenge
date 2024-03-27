// Assignment 37
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("I have made a ".concat(size, " size shirt with message ").concat(text));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "hello world");
