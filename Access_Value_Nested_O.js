const person = {
    Name : "Shajalal",
    age : 24,
    friends : ["Sakib", "Sakil"],
    1:"100",
    true : "sts",
    details: {
        job : "yes",
        isMarrid : false,
        status : "not found",
        father : {
            Name : "Md.Abdur Rahim",
            age : 76,
            Mother : {
                Name : "Marjahan Begum"
            }
        }
    }
}

console.log(person[true])

console.log(person["details"]["job"])

console.log(person.details.father.Mother.Name)
console.log(person.details.father.Mother.bather?.Name)