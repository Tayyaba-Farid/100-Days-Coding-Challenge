// simple function that calculates area of rectangular

function calculatearea(width: number, height: number): number{
    return width * height
}

// refactoring to arrow function
let calculateareaArrow = (width: number, height: number): number => {
return width * height
}

console.log(calculateareaArrow(5, 5))

