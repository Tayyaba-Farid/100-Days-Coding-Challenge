// Assignment 43
var magicians = ["Wizard Wren", "Magica Marlowe", "Illusory Icarus", "Mystic Miranda"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) { return console.log([magicians]); });
}
function make_great(magicians) {
    magicians.forEach(function (magicians) { return console.log("[the great ".concat(magicians, "]")); });
}
show_magicians(magicians);
make_great(magicians);
