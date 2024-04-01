function getquotientandremainder(num1: number, num2: number ): {quotient: number, remainder: number}{
   let quotient = Math.ceil(num1 / num2)
   let remainder = num1 % num2
   return {quotient, remainder}
}
console.log(getquotientandremainder(5, 2))