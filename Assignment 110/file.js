function assignGrades(grades) {
    if (grades <= 100 && grades >= 90) {
        return "A";
    }
    else if (grades <= 90 && grades >= 80) {
        return "A-";
    }
    else if (grades <= 80 && grades >= 70) {
        return "B";
    }
    else if (grades <= 70 && grades >= 60) {
        return "C";
    }
    else if (grades <= 60 && grades >= 50) {
        return "D";
    }
    else {
        return "FAIL";
    }
}
console.log(assignGrades(84));
console.log(assignGrades(34));
console.log(assignGrades(65));
