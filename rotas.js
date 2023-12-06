import { render } from "ejs";
import { Router } from "express";
import path from "path";

const pagesRouter = Router()

pagesRouter.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../',"/Front/Feed Logado/Feed Logado.html"))
    res.sendFile(path.join(__dirname, '../', "/Front/Feed Logado/Feed Logado.css"))
})

pagesRouter.get('/feed_deslogado', (req,res) =>{
    //res.sendFile() ou render
})

pagesRouter.get('/feed_logado', (req,res) =>{

})

pagesRouter.get('/recuperar_senha', (req,res) =>{

})

pagesRouter.get('/profile/:id', (req,res) =>{

})

pagesRouter.get('')