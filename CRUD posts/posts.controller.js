import Posts from "./posts.service.js";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const postRouter = Router();
const post = new Posts();


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
postRouter.get('/profile/:userid', async(req,res)=>{
    const {userid} = req.params;
    const userId = parseInt(userid)
    console.log(userid)
    console.log(userId)
    try{
    const userPostlist = await post.getUserPosts(userId)
    res.status(201).json(userPostlist)
    }catch(err){
        res.status(400).json({erro: err.message})
    }
})

postRouter.get('/posts', async (req,res) =>{
    const allPosts = await post.getPosts()
    console.log(allPosts)
    res.status(201).json(allPosts)
})



export default postRouter