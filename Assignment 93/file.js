function replacefruitwithother(fruits) {
    var a = fruits.indexOf("banana");
    fruits[a] = "mango";
    return fruits;
}
;
var fruits = ["apple", "faalse", "banana", "orange"];
replacefruitwithother(fruits);
console.log(fruits);
