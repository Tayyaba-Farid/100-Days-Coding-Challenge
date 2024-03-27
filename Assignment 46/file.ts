let laptop = {
    make: "Dell XPS 13",
    model: "Dell XPS 13 9310", 
    year: 2021,
    describe: function(){
       console.log(`This laptop ${this.make} is of model ${this.model} of year ${this.year}`)
    } 
}
console.log(laptop.describe())
console.log(laptop.model)
