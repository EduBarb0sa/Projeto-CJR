import { Router } from "express";
import authService from "./auth.service.js";
import session from "express-session";

const sessao = session
const AuthService = new authService()
const authRouter = Router()

authRouter.post("/sign-in", async (req,res) =>{
    const { email, senha } = req.body 

    try{
        const {token, userid} = await AuthService.signIn(email,senha)
        req.session.user = true
        req.session.userid = userid
        console.log(req.session.user)
        console.log(req.session.userid)
        // res.status(201).json(req.session.user)
        
        res.status(201).json({
            message: "sucesso",
            id: userid,
            token: token
        })
    }catch (e){
        res.status(400).json({message: e.message})
    }
})

export default authRouter