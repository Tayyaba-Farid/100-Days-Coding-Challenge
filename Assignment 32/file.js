// Assignment 32
var current_users = ["Tayyaba", "Hania", "Alina", "Aliza", "Ayeza"];
var new_users = ["Tayyaba", "Sania", "Soha", "Hania"];
function isUsernameTaken(username) {
    return current_users.some(function (current_username) { return current_username.toLowerCase() === username.toLowerCase(); });
}
console.log(isUsernameTaken);
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    if (isUsernameTaken(new_username)) {
        console.log("The username ".concat(new_username, " is already taken. Please choose another one."));
    }
    else {
        console.log("This username ".concat(new_username, " is available"));
    }
}
