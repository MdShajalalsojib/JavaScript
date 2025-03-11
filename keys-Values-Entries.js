const person = {
    name : "hena",
    age: 10,
    country : "BD"
}
Object.seal(person)
Object.freeze(person)

person.age = 30;
person.status = "not found";
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))