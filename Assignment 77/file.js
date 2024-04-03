function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    return ("hello, ".concat(name));
}
console.log(greetUser("Tayyaba"));
console.log(greetUser("Stasie"));
console.log(greetUser());
