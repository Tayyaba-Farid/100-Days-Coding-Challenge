var person = {
    name: "Tayyaba",
    age: 23,
    id: 23422,
    city: "karachi",
};
var convertIntoJson = JSON.stringify(person, null, 5);
console.log(convertIntoJson);
