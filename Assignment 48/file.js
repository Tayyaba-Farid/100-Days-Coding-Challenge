var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopSet1 = [
    { make: "Dell", model: "XPS 13", price: 50000 },
    { make: "apple", model: "MacBook Pro", price: 200000 }
];
var laptopSet2 = [
    { make: "HP", model: "Spectre x360", price: 100000 },
    { make: "Lenovo", model: "ThinkPad X1 Carbon", price: 150000 }
];
var combinedArray = __spreadArray(__spreadArray([], laptopSet1, true), laptopSet2, true).sort(function (a, b) { return a.price - b.price; });
console.log(combinedArray);
