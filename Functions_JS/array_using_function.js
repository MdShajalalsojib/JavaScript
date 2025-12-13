function sumNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
 const numbs = [21, 12, 33, 11];
 const sum = sumNumbers(numbs);
 console.log('Sum of numbers is ', sum);