let countries = new Map<string, string>();
countries.set("Canada", "Ottawa")
countries.set("France", "Paris")
countries.set("Pakistan", "Islamabad")


function logCanada(countries: Map<string, string>): void{
    if (countries.has("Canada")){
        console.log(`The capital of Canada is ${countries.get("Canada")}`)
    }
    else {
        console.log("Canada is not in the map")
    }
}
console.log(countries)