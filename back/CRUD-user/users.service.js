import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class Users{
    async newUser(email, senha, nome, genero, cargo) {
        return await prisma.user.create({
            data:{
                email: email,
                senha: senha,
                nome: nome,
                genero: genero,
                cargo: cargo,
            }
        }).catch((e) =>{
            if (e.code === 'P2002')
                throw new Error('Usuário já cadastrado')
            throw e
        })

    }

    async listUsers() {
        return await prisma.user.findMany();
    }

    async checkPassword (login, password) {
        const userlogin = await prisma.user.findUnique({
            where: {email: login}
        })
        if (userlogin == undefined){
            console.log('Usuário não cadastrado')
            return 'Usuário não cadastrado'
        }
    
        if (userlogin.senha != password){    
            console.log(userlogin.senha)
            console.log(password)   
            return 'Senha não corresponde'

        }
        console.log('Login aceito')
        return true
        }
    
    async changeInfo(email,info) {
        const checkexist = await prisma.user.findUnique({
            where:{
                email:email
            }
        
        })
        if (checkexist == null){
            return 'Usuário não existe'
        }
        const updateUser = await prisma.user.update({
            where: {
              email: email,
            },
            data: {
              senha: info,
            },
          })
        return "Senha alterada com sucesso"

    }
    async findByEmail(email) {
        return await prisma.user.findUnique({
            where:{
                email:email
            }
        });
    }
    async findById(id) {
        return await prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }
}