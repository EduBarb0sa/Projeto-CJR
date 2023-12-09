const renderpost =async () => {
    
    const answer = await fetch ('http://localhost:8000/getotherid')
    const userid = await answer.json()
    console.log(userid)

    const url ='http://localhost:8000/profile/posts/'+userid
    console.log(url)

    const response = await fetch(url)
    const posts = await response.json()
    const postconteiner = document.querySelector(".lista-de-post")
    posts.forEach(post =>{
        const postElement = document.createElement('div')
        postElement.classList.add("post")
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <a href="/profile/${post.userId}">${post.title}</a>
        <a href="/post/${post.id}">
            <p>${post.content}</p>
            </a>
        `
        postconteiner.appendChild(postElement)
   })
}
renderpost()