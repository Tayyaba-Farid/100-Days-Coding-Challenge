// doing 149 in this assignment

console.log("Start");

setTimeout(() => {
  console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);

console.log("End");