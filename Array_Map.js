const numbers = [1, 2, 3, 4, 5, 6];
const newArray = numbers.map(numbers => {
    return numbers+2
});
console.log(newArray);

// SquareArray

const  numb = [1, 2, 3, 4, 5, 6];
const SquareArray = numb.map(element => {
    return element * element
})
console.log(SquareArray)


// friends list 
const friends = ["rahim", "Korim", "jabbar"]
const newFriends = friends.map ((element, index) => {
    console.log(index)
    console.log(element)
})