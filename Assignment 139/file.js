// three reserved words in javascript
// first reserved word: function
function myUserId(name, email, ID) {
    return name + email + ID;
}
console.log(myUserId("Tayyaba", "Tayyaba@email.com", 890));
function infoUser(user) {
    return user;
}
console.log(infoUser({ name: "Tayyaba", email: "t@h.com", id: 7383, isActive: true }));
// third reserve word: let
var count = 10;
if (count > 0) {
    console.log("Count is greater than 0");
    count++;
}
