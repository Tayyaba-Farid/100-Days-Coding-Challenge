function nextYearBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var myBirthday = nextYearBirthday(12, 12);
console.log("next year birthday: ", myBirthday.toLocaleDateString());
