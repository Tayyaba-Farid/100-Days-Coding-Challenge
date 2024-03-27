// Assignment 44
function makeSandwich(items) {
    console.log("Sandwich Summary: ");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("- ".concat(item));
    }
}
makeSandwich(["Ham", "cheese", "pepperoni"]);
makeSandwich(["Peanut Butter", "Jelly"]);
makeSandwich(["jam", "chicken", "mayo"]);
