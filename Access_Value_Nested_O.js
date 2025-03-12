const person = {
    Name : "Shajalal",
    age : 24,
    friends : ["Sakib", "Sakil"],
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

console.log(person.details.father.Mother.Name)
console.log(person.details.father.Mother.bather?.Name)