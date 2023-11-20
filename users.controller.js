import Users from "./users.service";
import { Router } from "express";

const user = new Users()
const Router = Router()

router.post("/produto", async (req,res) =>{
    const {email, senha, nome, genero, cargo} = req.body;
    try{
        const novoUser = user.newUser(email,senha,nome,genero,cargo);
        res.status(201).json(novoUser)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }
})

router.get("/produto", (req,res) =>{
    const listaDeUsers = user.listUsers();
    res.status(201).json(listaDeUsers)
})