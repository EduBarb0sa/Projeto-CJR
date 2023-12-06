import { Router } from "express";
import authService from "./auth.service.js";

const AuthService = new authService()
const authRouter = Router()

authRouter.post("/sign-in", async (req,res) =>{
    const { email, senha } = req.body 

    try{
        const token = await AuthService.signIn(email,senha)
        res.status(201).json(token)
    }catch (e){
        res.status(400).json({message: e.message})
    }
})

export default authRouter