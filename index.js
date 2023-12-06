import express from "express";
import cors from "cors"
import UserRouter from "./back/CRUD-user/users.controller.js";
import postRouter from "./back/CRUD posts/posts.controller.js";
import authRouter from "./back/auth/auth.controller.js";
import path from "path"
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(authRouter)
app.use(cors())
app.use(UserRouter)
app.use(postRouter)
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"/Front/Feed Logado/Feed Logado.html"))
    res.sendFile(path.join(__dirname,  "/Front/Feed Logado/Feed Logado.css"))
    res.sendFile(path.join(__dirname,  "/Front/Feed Logado/Feed Logado.js"))

    
})

app.listen(8000, () => {
    console.log('Servidor rodando na url: http//:localhost:8000')
})