function hobbies(...hobby: string[]){
hobby = ["cycling", "reading", "painting", "stone collecting"]
hobby.forEach(myhobby => {
    console.log(`I enjoy ${myhobby}`)
})
}
console.log(hobbies())