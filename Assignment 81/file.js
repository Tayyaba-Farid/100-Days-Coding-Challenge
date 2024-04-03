function logobjproperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logobjproperties({ name: "Tayyaba", age: 23, id: 1234, isActive: "true" });
