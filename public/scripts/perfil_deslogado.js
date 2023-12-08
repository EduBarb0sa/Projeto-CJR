const main = async () =>{
    const userid = await fetch('http://localhost:8000/get-session-id')
    console.log(userid)
    return userid
}


main()
const url = 'http://localhost:8000/profile/'+userid
console.log(url)

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