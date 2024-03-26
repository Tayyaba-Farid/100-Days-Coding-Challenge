// Assignment 32
let current_users = ["Tayyaba", "Hania", "Alina", "Aliza", "Ayeza"]
let new_users = ["Tayyaba", "Sania", "Soha", "Hania"]

function isUsernameTaken(username: string): boolean {
return current_users.some(current_username => current_username.toLowerCase() === username.toLowerCase())
}
for(let new_username of new_users){
    if(isUsernameTaken(new_username)){
        console.log( `The username ${new_username} is already taken. Please choose another one.`)
    
    }
else {
    console.log( `This username ${new_username} is available`)
}
}

