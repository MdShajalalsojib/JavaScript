class Student {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
  }
}

// Creating an object from the class
const student1 = new Student("Rahim", 22, "CSE");

console.log(student1.getInfo());
