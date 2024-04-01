let scores: number[] = [89, 90, 67, 84, 68, 87, 23, 34, 52, 98, 15, 67, 84, 73, 49, 27]
let averageScore = scores.reduce((total, scores) => total + scores,0) / scores.length
console.log(averageScore)