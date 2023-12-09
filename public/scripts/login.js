
async function login() {
    const email = document.getElementById('login').value;
    const senha = document.getElementById('password').value;
    const dados = {
        email,
        senha
    }
    console.log(dados)
    // const loginUser = await
    fetch('http://localhost:8000/sign-in', {
        method: 'post',
        headers : {'Content-type':
    "application/json"},
        body: JSON.stringify(dados),
    }).then((res) => {
        return res.json()
    }).then((data) => {
        if(data.message == "sucesso"){
            localStorage.setItem("id_usuario", data.id)
            localStorage.setItem("token", data.token)
            localStorage.setItem("login", true)
            alert("Login efetuado com sucesso")
            window.location.href = "../feed"
        }else{
            alert("Conta Não Encontrada")
        }
    })
    
    
}

// document.getElementById('logar').addEventListener('click', () =>{
//     console.log('funcionou')
//     login()
    
// })

