console.log("Before synchronous operation")

for(let i = 0; i < 1e9; i++){}
 console.log("After synchronous operation")

console.log("Before asynchronous operartion")
setTimeout(() => {
    console.log("Asynchronous operation completed")
}, 1000)
console.log("After asynchronous operation")
