const person = {
    name: 'hena',
    age:20,
    friends: ["hero alom","korim"],
    status:true,
}
const newPerson = JSON.stringify(person);
// console.log( newPerson)

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2)