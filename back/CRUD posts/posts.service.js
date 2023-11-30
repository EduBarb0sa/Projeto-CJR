import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export default class Posts {
    async createPost(userid, title,content) {
        const userId = parseInt(userid)
        return await prisma.posts.create({
            data:{
                userId: userId,
                title: title,
                content: content
            }
        }).catch((e) =>{
            if (e.code === 'P2002')
                throw new Error('Usuário já cadastrado')
            throw e
        })

    }
    async getPosts(){
        return await prisma.posts.findMany();
        
    }
    async getUserPosts(userId){
        console.log(userId)
        return await prisma.posts.findMany({
            where:{
                userId: userId
            }
        })
    }
}
