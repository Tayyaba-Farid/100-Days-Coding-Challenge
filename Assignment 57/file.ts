let grades = [21, 67, 87, 65, 83, 83, 54, 36, 78, 98]
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length
console.log(averageGrade)
