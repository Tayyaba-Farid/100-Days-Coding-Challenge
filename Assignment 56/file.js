var mixlist = ["fruit", "vegetable", 90, 6, false, "name", "sports", true, 2, null];
var newlist = mixlist.filter(function (item) { return typeof item === "string"; });
console.log(newlist);
