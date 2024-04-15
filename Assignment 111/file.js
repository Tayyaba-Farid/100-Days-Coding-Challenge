function getAgeCategorized(age) {
    if (age >= 0 && age <= 3) {
        return "toddler";
    }
    else if (age >= 3 && age <= 10) {
        return "child";
    }
    else if (age >= 10 && age <= 19) {
        return "teenager";
    }
    else if (age >= 19 && age <= 30) {
        return "young adult";
    }
    else if (age >= 30 && age <= 50) {
        return "middle-aged adults";
    }
    else {
        return "old adults";
    }
}
console.log(getAgeCategorized(23));
