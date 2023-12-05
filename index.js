import express from "express";
import cors from "cors"
import cadastroRouter from "./back/CRUD-user/users.controller.js";
import loginRouter from "./back/CRUD-user/user.login.js"
import passwordrecuperationRouter from "./back/CRUD-user/user.recuperar.senha.js";
import postRouter from "./back/CRUD posts/posts.controller.js";
import authRouter from "./back/auth/auth.controller.js";


const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(authRouter)
app.use(passwordrecuperationRouter)
app.use(cors())
app.use(cadastroRouter)
app.use(loginRouter)
app.use(postRouter)
app.get('/',(req,res) =>{
    res.send('Operando')
})

app.listen(8000, () => {
    console.log('Servidor rodando na url: http//:localhost:8000')
})