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
}