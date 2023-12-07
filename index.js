import express from "express";
import cors from "cors"
import UserRouter from "./back/CRUD-user/users.controller.js"
import postRouter from "./back/CRUD posts/posts.controller.js";
import authRouter from "./back/auth/auth.controller.js";
import pagesRouter from "./rotas.js";

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(pagesRouter)
app.use(authRouter)
app.use(cors())
app.use(UserRouter)
app.use(postRouter)
app.listen(8000, () => {
    console.log('Servidor rodando na url: http//:localhost:8000')
})