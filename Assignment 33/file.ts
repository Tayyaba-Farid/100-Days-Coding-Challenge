// Assignment 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let number of numbers){
    let ordinalNumbering: string;

    if(number === 1){
        ordinalNumbering = "st"
    }
    else if(number === 2 || number === 3){
      ordinalNumbering = "rd"
    }
else {
  ordinalNumbering = "th"
}
console.log(`${number}${ordinalNumbering}`)
}
