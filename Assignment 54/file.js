function objectwithflexiblechoice(key, value) {
    var flexibleobject = {};
    flexibleobject[key] = value;
    return flexibleobject;
}
var userpreference = objectwithflexiblechoice("theme", "light");
console.log(userpreference);
