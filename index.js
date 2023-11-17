import express from "express"; //importa o express que cria o servidor que vai rodar
const app = express(); // tudo que se refere a express vai começar com 'app.'

import { Prisma, PrismaClient } from "@prisma/client"; // importa o prisma que é o que cria o banco de dados seguro
const prisma = new PrismaClient() //tudo que envolve prisma vai começar com 'prisma.'

    app.post('/nome', function(req,res){ //post é a funcionalidade que pega os elementos de dentro da página /infos-cadastro, que vão ser as coisas que o forms receber
                                //req = requisition, o que o cliente manda
                                //res = response, o que o servidor responde pro cliente
   
        const {email, senha, nome, genero, cargo}  = req.body //isso aqui separa o que o cliente manda no body(os dados) nos elementos
    res.send('Nome recebido') //isso aqui é so pra conferir se recebeu o nome
})


app.get('/', function(req,res){ // get pega a informação(req) do q fica em '/' na url
    res.send('Futuro banco de dados')
})


//isso aqui cria um novo user no banco de dados, mas ta errado e vou corrigir ainda
await prisma.user.create({ 
    data:{
        senha: "ABC",
        email: "fulano@gmail.com",
        nome: "fulano",
        genero: "masculino",
        cargo: "lider",
    }
    
})
//essa função inicializa o servidor na porta 3000, a url fica essa ai embaixo
app.listen(3000, ()=>{
    console.log('Servidor esta rodando na url http://localhost:3000')
})
//a ideia é pegar os dados do form em json, passar pra express (tem uma linha de codigo q faz isso q eu tenho q pegar ainda) e criar um novo user no banco de dados do prisma
//no schema prisma tem explicando o banco de dados