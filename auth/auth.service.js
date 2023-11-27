import jwt from "jsonwebtoken";
import Users from "../back/users.service";

const userService = new Users();


class AuthService {
    signIn (email, senha) {
        const user = userService.findByEmail(email);

        if (!user) {
            throw new Error ("Usuário não cadastrado")
        }
        if (user.senha !== senha) throw new Error('Senha incorreta');

        const token = jwt.sign({id:user.id}, "secret", {expiresIn: "15m"})
        return {token};
    }
}

export default AuthService;
