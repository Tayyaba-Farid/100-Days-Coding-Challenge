// three reserved words in javascript

// first reserved word: function

function myUserId(name: string, email: string, ID: number): string{
    return name + email + ID
}
console.log(myUserId("Tayyaba", "Tayyaba@email.com", 890))

// second reserve word: type

type User = {
    name: string,
    email: string,
    id: number,
    isActive: boolean
}

function infoUser(user: User){
    return user // return is also a reserved keyword
}
console.log(infoUser({name: "Tayyaba", email: "t@h.com",id: 7383, isActive: true}))

// third reserve word: let

let count = 10;
if (count > 0){ // if is also a reserved keyword
    console.log("Count is greater than 0")
    count++
}