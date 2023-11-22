
async function login() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const dados = {
        login,
        password
    }
    
    const loginUser = await fetch('http://localhost:8000/userlogin', {
        method: 'post',
        headers : {'Content-type':
    "application/json"},
        body: JSON.stringify(dados)


    })
}

document.getElementById('logar').addEventListener('click', () =>{
    login()
})

