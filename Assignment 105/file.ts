function dice(): number{
  let diceRoll = Math.floor((Math.random()) * 6) + 1;
return diceRoll
}
console.log(dice())