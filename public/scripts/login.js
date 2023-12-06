
async function login() {
    const email = document.getElementById('login').value;
    const senha = document.getElementById('password').value;
    const dados = {
        email,
        senha
    }
    console.log(dados)
    const loginUser = await fetch('http://localhost:8000/sign-in', {
        method: 'post',
        headers : {'Content-type':
    "application/json"},
        body: JSON.stringify(dados)


    })
}

document.getElementById('logar').addEventListener('click', () =>{
    login()
})

