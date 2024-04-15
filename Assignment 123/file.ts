function findVowel(name: string): void{
    let vowels = "aeiouAEIOU";
    for(let letter of name){
        if(vowels.includes(letter)){
            console.log(`First vowel has been found: ${letter}`)
            break;
        }
        console.log(letter)
    }
}
findVowel("FASCINATING")