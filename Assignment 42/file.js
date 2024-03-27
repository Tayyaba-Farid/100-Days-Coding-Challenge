// Assignment 42
var magicians = ["Wizard Wren", "Magica Marlowe", "Illusory Icarus", "Mystic Miranda"];
function make_great(magicians) {
    magicians.forEach(function (magicians) { return console.log(["The great ".concat(magicians)]); });
}
make_great(magicians);
