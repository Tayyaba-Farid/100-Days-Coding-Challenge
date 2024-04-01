type shapeDetails = {
   shape:  "circle" | "rectangle",
   radius?: number,
   width?: string,
   length?: string,
   Arc?: number
}

let circle: shapeDetails = {
    shape: "circle",
    radius: 3.14,
    Arc: 5.23
}

let rectangle: shapeDetails = {
    shape: "rectangle",
    width: "6 meters",
    length: "8 meters",

}
console.log(circle)
console.log(rectangle)