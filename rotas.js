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
pagesRouter.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    const rotaid = id;
    const userid = req.session.userid;

pagesRouter.get('/profile', (req,res) =>{
    console.log('logou')
    res.render('../views/perfil_logado')

    // const {id} = req.params
    // const rotaid = id
    // const userid = req.session.userid
    // console.log(rotaid, userid)
    // if(rotaid == userid){
    // }else{
    // }
        
    
})


export default pagesRouter