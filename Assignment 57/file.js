var grades = [21, 67, 87, 65, 83, 83, 54, 36, 78, 98];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
