var laptop = {
    make: "Dell XPS 13",
    model: "Dell XPS 13 9310",
    year: 2021,
    describe: function () {
        console.log("This laptop ".concat(this.make, " is of model ").concat(this.model, " of year ").concat(this.year));
    }
};
console.log(laptop.describe());
console.log(laptop.model);
