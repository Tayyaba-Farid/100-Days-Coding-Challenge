function sum(num: number[]): number{
    let sumNumbers = num.reduce((accumulator, current) => accumulator + current, 0)
    return sumNumbers
}
console.log(sum([3, 4, 2, 89, 64, 72]))
