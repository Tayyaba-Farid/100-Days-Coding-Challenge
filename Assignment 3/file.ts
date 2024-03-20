// Assignment 2
let myName = "Tayyaba"
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
let titlecaseName = myName.replace(/\b\w/g, c => c.toUpperCase());
console.log(titlecaseName)
