function logobjproperties(obj: object){
    for(let property in obj){
        console.log(`${property}: ${obj[property]}`)
    }
}
logobjproperties({name: "Tayyaba", age: 23, id: 1234, isActive: "true"})