// Assignment 43
let magicians: string[] = ["Wizard Wren", "Magica Marlowe", "Illusory Icarus", "Mystic Miranda"]

function show_magicians(magicians: string[]){
magicians.forEach(magicians => console.log([magicians]))
}
function make_great(magicians: string[]){
magicians.forEach(magicians => console.log(`[the great ${magicians}]`))
} 

show_magicians(magicians)
make_great(magicians)