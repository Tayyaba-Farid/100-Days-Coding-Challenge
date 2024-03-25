// Assignment 16
// Part 1: 
let myInvites = ["Sahil Adeem", "Dr.Zakir Naik", "Hitler"]
// as Hitler will not be able to attend.
myInvites[2] = "Hania"

myInvites.forEach(items=> {
    console.log("Hi, " + items + "!" + " " + "I have just got to know that I have found a bigger dinner table!")
});
  

// Part 2: // we will use unshift command to add new element at the start of an array.
myInvites.unshift("Iqra")

// part 3: // Adding in the middle
myInvites.splice(2, 0, "Aqsa")
console.log(myInvites)

// adding in the end
myInvites.push("Umaima")

// printing new invites 
myInvites.forEach(dinnerinvites => {
    console.log(`Hi, ${dinnerinvites}! I would like you to join me for dinner.`)
})

