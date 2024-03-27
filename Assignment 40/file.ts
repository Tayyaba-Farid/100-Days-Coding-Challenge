// Assignment 40
function make_album(artist: string, albumtitle: string, tracks?: number){
return {
artist: artist,
albumtitle: albumtitle,
tracks: tracks !== undefined ? tracks: undefined
}
}

let album1 = make_album("Jack", "Hope")
let album2 = make_album("ALTac", "Black Army", 90)
let album3 = make_album("Sonchg", "jhung ugh in")
console.log(album1)
console.log(album2)
console.log(album3)