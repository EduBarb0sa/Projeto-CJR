import Posts from "./posts.service.js";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import Users from "../CRUD-user/users.service.js";
import JwtGuard from "../auth/guards/jwt.guard.js";

const prisma = new PrismaClient();
const postRouter = Router();
const post = new Posts();
const user = new Users();


//criar post
postRouter.post('/posts', async (req,res) =>{
    const {title, content, userid} =req.body
    const userId = parseInt(userid)
    console.log(userid)
    console.log(userId)
    try{
        const novoPost = await post.createPost(userId,title,content );
        res.status(201).json(novoPost)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }

})


//posts do usuário
postRouter.get('/profile/:id', JwtGuard ,async(req,res)=>{
    const userid = req.params.id
    const userId = parseInt(userid)
    try{
    const userPostlist = await post.getUserPosts(userId)
    res.status(201).json(userPostlist)
    }catch(err){
        res.status(400).json({erro: err.message})
    }
})


//todos posts
postRouter.get('/posts', async (req,res) =>{
    const allPosts = await post.getPosts()
  
    allPosts.forEach(post =>{
        const userid = post.userId
        user.findById(userid)

    })
    const response = {
        id: post.id
        
    }
    res.status(201).json(allPosts)
})

postRouter.delete("/posts/:id", async (req, res) => {
    const {id} = req.params
    console.log("id", id)
    console.log("Estou zqui", req.params)
    const postFound = await post.findById(id);
    if (!postFound){
        console.log("Aqui agr")
        throw new Error("Post não encontrado")
    } else {
        console.log("Nao deu bom")
        await post.deleteById(id)
        res.status(204).send()
    }
})


export default postRouter