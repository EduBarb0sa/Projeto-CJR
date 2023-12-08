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
// Function to generate and set the dynamic link
function generateDynamicLink() {
    // Your dynamic logic to generate the link goes here
    const userid = getid()
    var dynamicURL = "http://localhost:8000/profile/"+userid; // Replace this with your dynamic URL

    // Set the href attribute of the dynamic link
    document.getElementById("dynamicLink").href = dynamicURL;
    console.log(dynamicURL)
    }

    // Attach the function to the button click event
document.getElementById("dynamicLinkButton").addEventListener("click", generateDynamicLink)