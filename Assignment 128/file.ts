let product = (...numbers: number[]) => {
return numbers.reduce((total, number) => total * number, 1)
}
console.log(product(2,4,3,9,5,4,3,6,7,8))