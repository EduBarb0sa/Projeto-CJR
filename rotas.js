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
        res.render('../views/feed_logado', {userid:req.session.userid})
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
    req.session.otherid = rotaid

    if (rotaid == userid) {
        console.log('sim')
        res.render('../views/perfil_logado');
    } else {
        console.log('nao', req.session.otherid)
        res.render('../views/perfil_deslogado');
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



export default pagesRouter