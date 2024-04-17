let obj = {
    property: "value",
    outerMethod: function(){
        console.log(this.property)
   let innerMethod = () => {
    console.log(this.property)
   }
innerMethod()

    }
}
obj.outerMethod()