import { Router } from "express";
import AuthService from "./auth.service";

const authService = new AuthService();
const authRout= Router();

authRout.post("/sign-in", async (req,res) =>{
    const {email, senha} = req.body;

    try{
        const token = await authService.signIn(email,senha)
        res.status(201).json(token)
    }catch (e){
        res.status(400).json({ message: e.message})
    }
})