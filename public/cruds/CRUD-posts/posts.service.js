import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export default class Posts {
    async createPost(userid, title,content) {
        const userId = parseInt(userid)
        return await prisma.posts.create({
            data:{
                userId: userId,
                title: "pdokfpaok",
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

    async findById(id) {
        try {
            const postId = parseInt(id, 10)
            const postFound = await prisma.posts.findUnique({
                where: {
                    id: postId
                }
            });
            return postFound
        }catch(error) {
            console.error(error.message);
            throw new Error("Erro ao buscar o post")
        }
    }

    async deleteById(id) {
        const postId = parseInt(id, 10)
        return await prisma.posts.delete({
            where: {
                id: postId
            }
        })
    }
    async save(){
        cons = 0
    }
}
