
const main = async () =>{
    const userid = await fetch('http://localhost:8000/get-session-id')
    return userid
}


const userid = main()
const url = 'http://localhost:8000/profile/'+userid

const renderpost =async () => {
        
    const response = await fetch(url)
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
    console.log(markdownContent)
    try { const dados = await fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: 13, title: "sodiajio", content: markdownContent}),
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