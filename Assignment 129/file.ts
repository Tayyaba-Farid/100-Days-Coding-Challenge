let logValueinTraditionFunction = {
    property: "value",
    length: 90,
    tradiitionalFunction: function(){
        console.log(this.property)
    },
    arrowfunction: () => {
console.log(this.property)
    }
}
console.log(logValueinTraditionFunction.tradiitionalFunction())
console.log(logValueinTraditionFunction.arrowfunction())