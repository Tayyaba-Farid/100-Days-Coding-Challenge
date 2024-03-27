// Assignment 44
function makeSandwich(items: string[]){
  console.log("Sandwich Summary: ")
  for(let item of items){
    console.log(`- ${item}`)
  }
}
makeSandwich(["Ham", "cheese", "pepperoni"])
makeSandwich(["Peanut Butter", "Jelly"])
makeSandwich(["jam", "chicken", "mayo"])