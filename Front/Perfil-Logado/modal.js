const criaposts = [
    {
        id: 1,
        title: "Post 1",
        content: "Não se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandia"
    },
    {
        id: 2,
        title: "Post 2",
        content: "Não se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandia"
    },
    {
        id: 3,
        title: "Post 3",
        content: "Não se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandia"
    },
    {
        id: 4,
        title: "Post 4",
        content: "Não se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandia"
    },
    {
        id: 5,
        title: "Post 5",
        content: "Não se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandiaNão se fala de outra coisa no metro de ceilandia"
    },
    
]
const renderpost =async () => {
        
    const response = await fetch('http://localhost:8000/profile')
    const posts = await response.json()
    const postconteiner = document.querySelector(".lista-de-post")
    posts.forEach(post =>{
        const postElement = document.createElement('div')
        postElement.classList.add("post")
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `
        postconteiner.appendChild(postElement)
    })
}
renderpost()

document.addEventListener('DOMContentLoaded', function () {
    var simplemde = new SimpleMDE({ element: document.getElementById("markdownInput") });
});

function openModal() {
    var dialog = document.getElementById('myModal');
    dialog.showModal();
}

function closeModal() {
    var dialog = document.getElementById('myModal');
    dialog.close();
}

function submitPost() {
    var markdownContent = document.getElementById("markdownInput").value;

    fetch('url-do-seu-backend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: markdownContent }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            closeModal();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}