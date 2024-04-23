let conditionalPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure!"));
    }
});
conditionalPromise.then((result) => console.log(result));
conditionalPromise.catch((error) => console.log(error));
export {};
