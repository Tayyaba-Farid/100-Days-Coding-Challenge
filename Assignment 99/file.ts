function nextYearBirthday(month: number, day: number): Date {
  let today = new Date();
  let year = today.getFullYear();
  let birthday = new Date(year, month - 1, day);
  if (birthday < today) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}
let myBirthday = nextYearBirthday(12, 12)
console.log("next year birthday: ", myBirthday.toLocaleDateString())
