import express from "express";
import cors from "cors"
import cadastroRouter from "./back/users.controller.js";
import loginRouter from "./back/user.login.js"


const app = express()
app.use(express.json())
app.use(cors())
app.use(cadastroRouter)
app.use(loginRouter)

app.get('/',(req,res) =>{
    res.send('Operando')
})

app.listen(8000, () => {
    console.log('Servidor rodando na url: http//:localhost8000')
})