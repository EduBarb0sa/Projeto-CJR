const renderpost =async () => {
        
    const response = await fetch('http://localhost:8000/posts')
    const posts = await response.json()
    const postconteiner = document.querySelector(".lista-de-post")
    posts.forEach(post =>{
        const postElement = document.createElement('div')
        postElement.classList.add("post")
        
        postElement.innerHTML = `
        <a href="/profile/${post.userId}">${post.title}</a>
        <a href="/post/${post.id}">
            <p>${post.content}</p>
            </a>
        `
        postconteiner.appendChild(postElement)
   })
}
renderpost()

const getid = async () =>{
    const response = await fetch('http://localhost:8000/getuserid')
    const userid = response.json()
    return userid
}