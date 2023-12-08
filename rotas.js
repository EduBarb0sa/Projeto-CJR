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
    console.log(req.params); // Log the params object to see what's inside
    const {id} = req.params;
    const rotaid = id;
    const userid = req.session.userid;
    console.log('rota', rotaid);
    console.log('user', userid);

    if (rotaid == userid) {
        console.log('logou');
        res.render('../views/perfil_logado');
    } else {
        console.log('nao logou');
        res.render('../views/perfil_deslogado');
    }
});

pagesRouter.get('get-session-id', (req, res) => {
    const userId = req.session.userid; // Get the user ID from the session
    res.json(userId);
})

export default pagesRouter