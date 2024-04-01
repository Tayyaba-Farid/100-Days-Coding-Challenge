function customAdder(specialnumber: number) {
 return function(numbertoadd: number){
    return specialnumber + numbertoadd
 }
}

const adder = customAdder(2);
console.log(adder(10))
console.log(adder(100))
console.log(adder(15))