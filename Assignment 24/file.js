// Assignment 24
// Tests for equality and inequality with strings
var word = "Hello";
console.log("is the word equals to 'Hello'? I predict true");
console.log(word == "Hello");
var myname = "Tayyaba";
console.log("is the name != 'Tayyaba'? I predict false");
console.log(myname != "Tayyaba");
//Tests using the lower case function
var section = "1-D";
console.log("is section will be written in lowercase so it will be '1-d'? I predict true");
console.log("1-D".toLowerCase() == "1-d");
var cow = "POLLY";
console.log("if we write POLLY in lowercase it will be written like this 'POLLY' I predict false");
console.log("POLLY".toLowerCase() == "POLLY");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality and inequality
var num1 = 9;
console.log("if number 1 is = 9, I predict true");
console.log(num1 == 9);
var num2 = 10;
console.log("if number 2 != 10,I predict false");
console.log(num2 != 10);
// greater than and less than
var marks1 = 5;
var marks2 = 10;
console.log("if marks 2 is > than marks 1, I predict true");
console.log(marks2 > marks1);
var subject1 = 209735;
var subject2 = 137828;
console.log("if subject 1 is < than subject 2, I predict false");
console.log(subject1 < subject2);
//greater than or equal to, and less than or equal to
var num3 = 8;
var num4 = 6;
console.log("is num3 is >= to num4, I predict true");
console.log(num3 >= num4);
var num5 = 10;
var num6 = 1;
console.log("is num5 is <= to num6, I predict false");
console.log(num5 <= num6);
//Tests using "and" and "or" operators
var classmarks = 78;
var classmarks2 = 89;
console.log("is classmarks is greater and greater and equals to classmarks2, I predict false.");
console.log(classmarks > classmarks2 && classmarks >= classmarks2);
var f1 = 1;
var f2 = 2;
var f3 = 3;
var f4 = 4;
console.log("is f2 > than f1 or f4 is < than f3, I predictt true");
console.log(f2 > f1 || f4 < f3);
//  Test whether an item is in a array
var arr1 = ['apple', 'banana', 'grapes', 'mango'];
console.log("is banana is in arr1? I predict true.");
console.log(arr1.indexOf('banana') == 1);
//Test whether an item is not in a array
var arr2 = ["tayyaba", "hania", "iqra", "aqsa"];
console.log("is umaima is in arr2? I predict true");
console.log(arr2.indexOf("Umaima") !== -1);
