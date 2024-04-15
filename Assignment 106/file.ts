function checkLeapyear(year: number): boolean{
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    
}
console.log(checkLeapyear(2000))