import { Router } from "express";
import Users from "./public/crud/CRUD-user/users.service.js";
import Posts from "./public/crud/CRUD posts/posts.service.js";

const PostService = new Posts()
const UserService = new Users()
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
        res.render('../views/feed_logado', {userid:req.session.userid})
    }
    res.render('../views/feed_deslogado')

})
pagesRouter.get('/recuperar_senha', (req,res) =>{
    res.render('../views/recuperar_senha')

})
pagesRouter.get('/profile/:id', async (req, res) => {
    const {id} = req.params;
    const rotaid = parseInt(id,10);
    const userid = req.session.userid;
    req.session.otherid = rotaid
    const dadosuser = await UserService.findById(rotaid)
    const {email, nome, genero, cargo} = dadosuser

    if (rotaid == userid) {
        console.log('sim')
        res.render('../views/perfil_logado',{email,nome,genero,cargo});
    } else {
        console.log('nao', req.session.otherid)
        res.render('../views/perfil_deslogado',{email,nome,genero,cargo});
    }
});
pagesRouter.get('/getuserid', (req, res) => {
    // Get the user ID from the session
    const userid = req.session.userid;
    res.json(userid)
})
pagesRouter.get('/getotherid', (req, res) => {
    // Get the user ID from the session
    const userid = req.session.otherid;
    console.log('otherid',userid)
    res.json(userid)
})
pagesRouter.get('/username', (req,res) =>{
    const dados = req.session.dadosuser
    const { nome } = dados
    res.json(nome)
})
pagesRouter.get('/editar_perfil', (req,res) =>{
    res.render('../views/editar_perfil')
})
pagesRouter.get('/post/:oid', async (req,res) =>{
    const {oid} = req.params
    const dados = await PostService.findById(oid)
    const {id, title, content} = dados
    req.session.postid = id
    res.render('../views/post',{title,content})
})

export default pagesRouter