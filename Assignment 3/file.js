// Assignment 2
var myName = "Tayyaba";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
var titlecaseName = myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(titlecaseName);
