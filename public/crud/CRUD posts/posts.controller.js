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
    const {nome, content, userId} = req.body
    try{
        const novoPost = await post.createPost(userId,nome,content );
        res.status(201).json(novoPost)
    }
    catch(err){
        res.status(400).json({erro: err.message})
    }

})


//posts do usuário
postRouter.get('/profile/posts/:id',async(req,res)=>{
    const { id } = req.params;  // Use req.params.id directly
    console.log(id);
    const userId = parseInt(id, 10);
    console.log(userId);
    
    try {
        const userPostlist = await post.getUserPosts(userId);
        res.status(201).json(userPostlist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

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

//Deleta post
postRouter.delete("/posts/:id", async (req, res) => {
    const {id} = req.params
    try {
        const postFound = await post.findById(id);

        if (!postFound){
            throw new Error("Post não encontrado");
        } else {
            await Post.findByIdAndDelete(id);
            res.status(204).send();
        }
    }catch (error) {
        console.error("Erro ao Excluir o post:", error.message)
        res.status(500).send("Erro ao excluir o post");
    }
})

//Altera post ( Tentando )
postRouter.put("/posts/:id", async (req, res) => {
    const { id } = req.params;
    console.log("Estou aqui")
    const postToUpdate = await post.findById(id);
    if (!postToUpdate) {
        throw new Error("Post não encontrado");
    } else {
        postToUpdate.content = req.body.content;
        await postToUpdate.save();
        res.status(404).json({ error: error.message });
    }
});


export default postRouter