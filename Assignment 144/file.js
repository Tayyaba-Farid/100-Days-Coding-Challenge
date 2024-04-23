// promise.all[] method.
let promise1 = Promise.resolve(50);
let promise2 = "Tayyaba";
let promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "Foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => { console.log(values); });
export {};
