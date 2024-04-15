function evaluateGrades(marks) {
    switch (marks) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Average");
            break;
        case "F":
            console.log("Bad result");
            break;
        default:
            console.log("Invalid grade");
            break;
    }
}
evaluateGrades("B");
