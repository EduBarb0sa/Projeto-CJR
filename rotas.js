import { render } from "ejs";
import { Router } from "express";
import path from "path";

const pagesRouter = Router()

pagesRouter.get('/', (req,res) =>{
    res.render('../views/cadastro')

})
pagesRouter.get('/cadastro', (req,res) =>{
    res.render('../views/cadastro')
})
pagesRouter.get('/login', (req,res) =>{
    res.render('../views/login')

})
pagesRouter.get('/feed_deslogado', (req,res) =>{
    res.render('../views/feed_deslogado')

})

pagesRouter.get('/feed_logado', (req,res) =>{
    res.render('../views/feed_logado')
    
})

pagesRouter.get('/recuperar_senha', (req,res) =>{
    res.render('../views/recuperar_senha')

})

pagesRouter.get('/profile/:id', (req,res) =>{
    res.render('../views/perfil_logado')
})

export default pagesRouter