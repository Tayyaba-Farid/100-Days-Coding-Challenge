// Assignment 31

// If the list is empty, print the message We need to find some users!
let usernames: string[] = ["Admin", "Tayyaba", "Umaima", "Hania", "Ifra"]
if (usernames.length == 0){
    console.log("We need to find some users")
}
for (let username of usernames){
    if(username == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}
usernames= []
if (usernames.length == 0){
    console.log("We need to find some users")
}

