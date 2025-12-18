const number = [1,4,3,5,6,7,];

// Without Map 

let temp = [];
for (let index = 0; index <number.length; index++){
    const element = number[index];
    const sum = element + 1;
    temp.push(sum)
}
console.log(temp);

// Usd the Map 

 const newArray = number.map(number => {
    return number + 1
 });
 console.log(newArray);