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

async function submitPost() {
    var markdownContent = document.getElementById("markdownInput").value;
    fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: 19, title: "sodiajio", content: markdownContent}),
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