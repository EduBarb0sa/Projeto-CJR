import jwt from "jsonwebtoken";
import Users from "../../back/CRUD-user/users.service.js";

const userService = new Users()

export default class authService  {
    async signIn(email,senha) {
        const user = await userService.findByEmail(email);

        if (!user) throw new Error ("Usuário não encontrado")

        if (user.senha !== senha) throw new Error ("Senha incorreta")

        const token = jwt.sign({id: user.id}, "secret", {expiresIn: "15m"})

        return {token}
    }
}