const loadUser = () =>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(respons => respons.json())
     .then(data => showUser(data)) 
         
     
}

const showUser = (users) => {
    const userContiner = document.getElementById('users');
     for (const user of users){
        console.log(user.name)
        const li = document.createElement("li");
        li.innerText = user.name;
        userContiner.appendChild(li);
        
     }
}