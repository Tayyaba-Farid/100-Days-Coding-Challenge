function removeElement(elm: string[]): string[] {
     elm.pop()
     return elm
}
let fruits : string[] = ["apple","mango", "melon"]
console.log(removeElement(fruits))