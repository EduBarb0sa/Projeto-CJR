import express from "express";
import router from "./users.controller.js"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.get('/',(req,res) =>{
    res.send('Operando')
})

app.listen(8000, () => {
    console.log('Servidor rodando na url: http//:localhost8000')
})