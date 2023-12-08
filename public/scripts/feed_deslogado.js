const renderpost =async () => {
        
    const response = await fetch('http://localhost:8000/posts')
    const posts = await response.json()
    const postconteiner = document.querySelector(".lista-de-post")
    posts.forEach(post =>{
        const postElement = document.createElement('div')
        postElement.classList.add("post")
        
        postElement.innerHTML = `
        <a href="/profile/${post.userId}">${post.title}</a>

            <p>${post.content}</p>
        `
        postconteiner.appendChild(postElement)
   })
}
renderpost()