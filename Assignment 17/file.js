// Assignment 17
// Part 1
// starting from program 16
var myInvites = ["Sahil Adeem", "Dr.Zakir Naik", "Hitler"];
myInvites[2] = "Hania";
myInvites.unshift("Iqra");
myInvites.splice(2, 0, "Aqsa");
myInvites.push("Umaima");
// informing them that I have only space for two.
myInvites.forEach((function (people) {
    console.log("Hi, " + people + "!" + " " + "Sorry to inform you that my dinner table won't arrive in time, so I can only invite two people.");
}));
// part two / Removing people from the list using splice()
var indextoremove0 = 1;
myInvites.splice(indextoremove0, 1);
console.log("Hi, Sahil Adeem" + "!" + " " + "Sorry to inform you that I cannot invite you to dinner");
var indextoremove1 = 2;
myInvites.splice(indextoremove1, 1);
console.log("Hi, Dr.Zakir Naik" + "!" + " " + "Sorry to inform you that I cannot invite you to dinner");
var indextoremove2 = 3;
myInvites.splice(indextoremove2, 1);
console.log("Hi, Umaima" + "!" + " " + "Sorry to inform you that I cannot invite you to dinner");
var indextoremove3 = 2;
myInvites.splice(indextoremove3, 1);
console.log("Hi, Hania" + "!" + " " + "Sorry to inform you that I cannot invite you to dinner");
console.log(myInvites);
// part 3
myInvites.forEach(function (dinnerinvites) {
    console.log("Hi, ".concat(dinnerinvites, "! I would like to inform you that you are still invited to my dinner"));
});
// part 4
var indextoremove4 = 0;
myInvites.splice(indextoremove4, 1);
var indextoremove5 = 0;
myInvites.splice(indextoremove5, 1);
console.log(myInvites);
