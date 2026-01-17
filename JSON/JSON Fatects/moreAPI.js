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
        console.log(user)
        const div = document.createElement("div");

        div.classList.add("card")
        div.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.username}</h2>
        <p>${user.email}</p>
        `;
        userContainer.appendChild(div);
    }
}