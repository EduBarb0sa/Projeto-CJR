import Users from "./back/users.service.js";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const user = new Users()
const cadastroRouter = Router()

cadastroRouter.post("/userinfo", async (req,res) =>{
    const {email, senha, nome, genero, cargo} = req.body;
    try{
        const novoUser = await user.newUser(email,senha,nome,genero,cargo);
        res.status(201).json(novoUser)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }
})

cadastroRouter.get("/listausers", async (req,res) =>{
    const listaDeUsers = await user.listUsers();
    res.status(201).json(listaDeUsers)
})
export default cadastroRouter