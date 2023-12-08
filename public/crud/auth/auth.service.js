import jwt from "jsonwebtoken";
import Users from "../CRUD-user/users.service.js";

const userService = new Users()

export default class authService  {
    async signIn(email,senha) {
        const user = await userService.findByEmail(email);

        if (!user) throw new Error ("Usuário não encontrado")

        if (user.senha !== senha) throw new Error ("Senha incorreta")

        const userid = user.id
        const token = jwt.sign({id: userid}, "secret", {expiresIn: "15m"})

                
        return {token, userid}
    
    }
    async storeToken(token) {
        const userToken = token
    }
}