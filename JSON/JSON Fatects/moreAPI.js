const handleLoadUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data =>{
         
        displayUseer(data)
     })
}

const displayUseer = (users) => {
    const userContainer = document.getElementById('users');

    for (const user of users){
        console.log(user.name)
        const div = document.createElement("div");
        div.innerText = user.name;
        userContainer.appendChild(div);
    }
}