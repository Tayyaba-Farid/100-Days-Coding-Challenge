var _this = this;
var logValueinTraditionFunction = {
    property: "value",
    length: 90,
    tradiitionalFunction: function () {
        console.log(this.property);
    },
    arrowfunction: function () {
        console.log(_this.property);
    }
};
console.log(logValueinTraditionFunction.tradiitionalFunction());
console.log(logValueinTraditionFunction.arrowfunction());
