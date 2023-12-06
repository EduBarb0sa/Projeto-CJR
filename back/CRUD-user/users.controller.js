import Users from "./users.service.js";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const prisma = new PrismaClient()
const user = new Users()
const UserRouter = Router()

console.log(__dirname)
UserRouter.get("/", (req,res,next) =>{
    res.sendFile(path.join(__dirname, '../','../','Front','Tela-Cadastro','Tela_cadastro.html'))
})


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