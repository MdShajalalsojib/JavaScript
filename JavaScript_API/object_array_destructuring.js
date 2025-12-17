// Destructuring Usd 
const student = {
  name: "Sojib",
  age: 23,
  dept: "CSE"
};

const { name, age, dept } = student;

console.log(name);  
console.log(age);  
console.log(dept);  

// Extraction Object from property

const student2 = {
  Name: "Sojib",
  Age: 23,
  dept: "CSE"
};

let Name = student2.Name;
let Age = student2.Age;


// Array Destructuring

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);  
console.log(b);  
console.log(c);  


