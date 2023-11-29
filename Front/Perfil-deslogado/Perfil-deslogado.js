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
const renderpost = () => {
    const postconteiner = document.querySelector(".lista-de-post")
    criaposts.forEach(post =>{
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