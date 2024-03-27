let laptopSet1 = [
    {make: "Dell", model: "XPS 13", price: 50000},
    {make: "apple", model: "MacBook Pro", price: 200000}
]

let laptopSet2: {make: string, model: string, price: number}[] = [
    {make: "HP", model: "Spectre x360", price: 100000},
    {make: "Lenovo", model: "ThinkPad X1 Carbon", price: 150000}
]


let combinedArray = [...laptopSet1, ...laptopSet2].sort((a, b) => a.price - b.price);
console.log(combinedArray)