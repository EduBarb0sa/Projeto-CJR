import Users from "./users.service.js";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
const user = new Users()
const UserRouter = Router()



//criar user
UserRouter.post("/userinfo", async (req,res) =>{
    const {email, senha, nome, genero, cargo} = req.body;
    try{
        const novoUser = await user.newUser(email,senha,nome,genero,cargo);
        res.status(201).json(novoUser)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }
})

//listar users
UserRouter.get("/listausers", async (req,res) =>{
    const listaDeUsers = await user.listUsers();
    res.status(201).json(listaDeUsers)
})

//trocar senha do user
UserRouter.post("/userchangepassword", async(req,res) =>{
    const {email, password} = req.body;
    console.log(email,password)
    const change = await user.changeInfo(email,password);
    res.json(change)
})


//OBS: criar user tá em auth.controller


export default UserRouter