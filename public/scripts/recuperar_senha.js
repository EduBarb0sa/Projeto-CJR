async function trocarsenha() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedpassword = document.getElementById('confirmedpassword').value;

    if (password != confirmedpassword){
        console.log('As senhas sao diferentes')
        return false
    }
    const dados ={
        email:email,
        password:password
    }
    console.log(dados)

    const loginUser = await fetch('http://localhost:8000/userchangepassword', {
        method: 'POST',
        headers : {'Content-type':
    "application/json"},
        body: JSON.stringify(dados)


    })
    console.log(dados)
}   

document.getElementById('enviar').addEventListener('click', () =>{
    console.log('funcionou');
    trocarsenha()
});