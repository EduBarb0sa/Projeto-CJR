import { Router } from "express";

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
pagesRouter.get('/feed', (req,res) =>{
    if(req.session.user){
        res.render('../views/feed_logado')
    }
    res.render('../views/feed_deslogado')

})
pagesRouter.get('/recuperar_senha', (req,res) =>{
    res.render('../views/recuperar_senha')

})

pagesRouter.get('/profile/:id', (req,res) =>{
    rotaid = req.params.id
    userid = req.session.userid
    if(rotaid ==userid){
        res.render('../views/perfil_logado')
    }
    res.render('../views/perfil_deslogado')
})

export default pagesRouter