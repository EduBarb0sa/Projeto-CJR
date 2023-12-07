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
    console.log(req.body)
    const {title, content, userId} =req.body
    try{
        const novoPost = await post.createPost(userId,title,content );
        res.status(201).json(novoPost)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }

})


//posts do usuário
postRouter.get('/profile/:id', async(req,res)=>{
    const userId = req.params.id
    try{
    const userPostlist = await post.getUserPosts(+userId)
    res.status(201).json(userPostlist)
    }catch(err){
        console.log(err)
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



export default postRouter