function replacefruitwithother(fruits: string[]): string[] {
  let a = fruits.indexOf("banana")
  fruits[a] = "mango"
  return fruits;
};
let fruits: string[] = ["apple", "faalse", "banana", "orange"]
replacefruitwithother(fruits)
console.log(fruits)

