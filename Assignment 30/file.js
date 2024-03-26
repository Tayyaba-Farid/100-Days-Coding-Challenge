// Assignment 30
var usernames = ["Admin", "Tayyaba", "Umaima", "Hania", "Ifra"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
var ids = [90, 9, 67];
for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
    var id = ids_1[_a];
    if (id == 67) {
        console.log("this is my id, don't touch");
    }
    else {
        console.log("you can have it ".concat(id));
    }
}
