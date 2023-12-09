async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const cargo = document.getElementById('cargo').value;

    const response = await fetch('http://localhost:8000/getuserid')
    const id = await response.json()

    const dadosUser = {
        nome,
        genero,
        cargo,
        id,
    };
    const criarUser = await fetch('http://localhost:8000/edit', {
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