import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import Users from "../CRUD-user/users.service.js";

const user = new Users()
const prisma = new PrismaClient()
const loginRouter = Router()


loginRouter.post("/userlogin", async(req,res) =>{
    const {login, password} = req.body;
    const check = await user.checkPassword(login,password);
    res.status(201).json(check)  
})


export default loginRouter