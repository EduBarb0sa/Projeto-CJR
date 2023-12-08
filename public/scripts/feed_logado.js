const renderpost =async () => {
        
    const response = await fetch('http://localhost:8000/profile/posts/')
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

const getid = async () =>{
    const response = await fetch('http://localhost:8000/getuserid')
    const userid = response.json()
    return userid
}