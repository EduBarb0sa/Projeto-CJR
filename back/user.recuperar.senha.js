import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import Users from "./users.service.js";

const user = new Users()
const prisma = new PrismaClient()
const passwordrecuperationRouter = Router()


passwordrecuperationRouter.post("/userchange", async(req,res) =>{
    const {email, password} = req.body;
    const change = await user.changeInfo(email,password);
    res.json(change)
})


export default passwordrecuperationRouter