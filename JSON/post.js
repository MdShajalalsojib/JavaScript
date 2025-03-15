const handLePost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        displayPost(data)
    })
}

const displayPost = (posts) => {
    const postContainer = document.getElementById('postContainer');
    for (const post of posts){
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
             <h1> ${post.title}</h1>
             <p> ${post.body}</p>
             <button>det</button>
        `;
        postContainer.appendChild(div)
        // console.log(post.title)
    }
}

handLePost()