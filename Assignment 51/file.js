// simple function that calculates area of rectangular
function calculatearea(width, height) {
    return width * height;
}
// refactoring to arrow function
var calculateareaArrow = function (width, height) {
    return width * height;
};
console.log(calculateareaArrow(5, 5));
