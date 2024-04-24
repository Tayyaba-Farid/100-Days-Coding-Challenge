function handleErrors(callback) {
    var error = new Error("There is some error found");
    var data = "There is some data found";
    if ((Math.random() > 0.5)) {
        callback(error);
    }
    else {
        callback(null, data);
    }
}
handleErrors(function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
