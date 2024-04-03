function returnNumber(Numbers: number[]): number[]{
let newarray = Numbers.filter(number => number > 10)
return newarray
}
console.log(returnNumber([7, 11, 90, 3, 78, 908, 1, 546]))
