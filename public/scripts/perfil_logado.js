const renderpost = async () => {
    const response1 = await fetch('http://localhost:8000/getuserid');
    const userid = await response1.json();
    console.log(userid);
    const url = 'http://localhost:8000/profile/posts/' + userid;
    const response2 = await fetch(url);
    const posts = await response2.json();
    const postconteiner = document.querySelector(".lista-de-post");

    postconteiner.innerHTML = ''; // Clear existing posts

    const createPostElement = (post) => {
        const postElement = document.createElement('div');
        postElement.classList.add("post");

        postElement.innerHTML += `
        <a href="/profile/${post.userId}">${post.title}</a>
        <a href="/post/user/${post.id}">
            <p>${post.content}</p>
            </a>
        `
        ;

        return postElement;
    };

    posts.forEach(post => {
        const postElement = createPostElement(post);
        postconteiner.appendChild(postElement);
    });
}


// Call renderpost to initiate the rendering of posts
renderpost();


var simplemde = new SimpleMDE({ element: document.getElementById("markdownInput") });

function openModal() {
    var dialog = document.getElementById('myModal');
    dialog.showModal();
}

function closeModal() {
    var dialog = document.getElementById('myModal');
    dialog.close();
}

async function submitPost(event) {
    event.preventDefault()
    var markdownContent = simplemde.value();
    const response = await fetch('http://localhost:8000/getuserid')
    const userId = await response.json()
    const response4 = await fetch('http://localhost:8000/username')
    const nome = await response4.json()
    console.log('userid',userId)
    const userid = parseInt(userId,10)
    try { const dados = await fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: userid, nome: nome, content: markdownContent}),
    })
    const post = await dados.json()
    console.log(post)
    } catch (error){
        console.error(error)
    }

}

const formpost = document.getElementById("qualquer")
formpost.addEventListener("submit", submitPost)
console.log(formpost)