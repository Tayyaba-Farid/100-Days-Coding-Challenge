function objectwithflexiblechoice(key: string, value: string){
let flexibleobject = {}
flexibleobject[key] = value;
return flexibleobject
}

let userpreference = objectwithflexiblechoice("theme", "light")
console.log(userpreference)