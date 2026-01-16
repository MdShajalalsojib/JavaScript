const handleLoadUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data =>{
        console.log(data)
        displayUseer(data)
     })
}

const displayUseer = (users) => {
    console.log(users[4])
}