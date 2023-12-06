import { Router } from "express";

const pagesRouter = Router()

pagesRouter.get('/', (req,res) =>{
    res.sendFile(__dirname +"/Front/Feed deslogado/Feed Logado.html")
})
