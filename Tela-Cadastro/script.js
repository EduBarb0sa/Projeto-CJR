

async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const cargo = document.getElementById('cargo').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosUser = {
        nome,
        genero,
        cargo,
        email,
        senha,
    };
    
    const criarUser = await fetch('http://localhost:8000/userinfo', {
        method: 'post',
        headers : {'Content-type':
    "application/json"},
        body: JSON.stringify(dadosUser)


    })
}

document.getElementById('cadastro').addEventListener('click', () =>{
    console.log('funcionou');
    cadastrar()
});