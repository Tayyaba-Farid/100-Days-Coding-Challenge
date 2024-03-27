// Assignment 40
function make_album(artist, albumtitle, tracks) {
    return {
        artist: artist,
        albumtitle: albumtitle,
        tracks: tracks !== undefined ? tracks : undefined
    };
}
var album1 = make_album("Jack", "Hope");
var album2 = make_album("ALTac", "Black Army", 90);
var album3 = make_album("Sonchg", "jhung ugh in");
console.log(album1);
console.log(album2);
console.log(album3);
