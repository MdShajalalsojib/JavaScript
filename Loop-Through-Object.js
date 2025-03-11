const person = {
    name: "hena",
    age: 10,
    country: "BD"
}
console.log(person["name"])

for(let key in person){
    console.log(`key : ${key} value:${person [key]}`)

}

// or 
for (let [key,value] of Object.entries(person)){
    console.log(`key : ${key} value:${value}`)
}