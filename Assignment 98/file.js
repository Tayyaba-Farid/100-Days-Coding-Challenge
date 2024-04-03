function daysuntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var difference = newYear.getTime() - today.getTime();
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysuntilNewYear());
