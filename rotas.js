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

    if (rotaid == userid) {
        console.log('sim')
        res.render('../views/perfil_logado');
    } else {
        console.log('nao')
        res.render('../views/perfil_deslogado');
    }
});
pagesRouter.get('/getuserid', (req, res) => {
    // Get the user ID from the session
    const userid = req.session.userid;
    res.json(userid)
})


export default pagesRouter