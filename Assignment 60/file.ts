let userProfile = (function() {
let name = "Jack";
let age = 34;
return {
    displayInfo: function(){
    console.log(`User name is ${name} and age is ${age}`)
    }
}
})()


userProfile.displayInfo()