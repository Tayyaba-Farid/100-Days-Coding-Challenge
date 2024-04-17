let totalCalculateMarks = {
 marks1: 89,
 marks2: 50,
 marks3: 90,
 totalMarks: function(){
  return this.marks1 + this.marks2 + this.marks3
 }
}
console.log(totalCalculateMarks.totalMarks())