let userDetails = {
    name: "Tayyaba",
    age: 23,
    status: "single",
    getObjectProperty: function (){
        return this.name
    }
}
console.log(userDetails.getObjectProperty())