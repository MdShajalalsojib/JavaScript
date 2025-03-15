const person = {
    name: "gias", age:20
}
function sum(obj){
    obj.name = "hero alom"
}
sum(person)
console.log(person)


function sum (a, b, c, d){
    console.log(arguments)
}
console.log(sum.length)
sum(20, 10, 40, 29, 59);