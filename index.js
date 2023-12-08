import express from "express";
import cors from "cors"
import UserRouter from "./public/crud/CRUD-user/users.controller.js";
import authRouter from "./public/crud/auth/auth.controller.js";
import postRouter from "./public/crud/CRUD posts/posts.controller.js";
import pagesRouter from "./rotas.js";
import session from "express-session";

const app = express()
app.use(express.json())

app.use(session({
  secret: 'vasco imenso',
  resave: false,
  saveUninitialized: false

}))


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
