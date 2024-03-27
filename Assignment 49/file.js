function hobbies() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby = ["cycling", "reading", "painting", "stone collecting"];
    hobby.forEach(function (myhobby) {
        console.log("I enjoy ".concat(myhobby));
    });
}
console.log(hobbies());
