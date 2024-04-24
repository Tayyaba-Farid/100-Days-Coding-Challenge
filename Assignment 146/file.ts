function executeCallback(
  callback: (num1: number, num2: number) => void,
  num1: number,
  num2: number
): void {
    callback(num1,num2)
}

let addNumbers = (num1: number, num2: number) => {
console.log(num1 + num2)
}

executeCallback(addNumbers, 5, 5)
