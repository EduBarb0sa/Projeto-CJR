import jwt, { decode } from "jsonwebtoken"

export default function JwtGuard (req,res,next) {
    const authorization = req.headers.authorization
    if (!authorization){
        res.status(401).json({message: "Token não informado"})
    }
    const [prefix,token] = authorization.split(" ")
    if (prefix != "Bearer"){
        res.status(401).json({message: "Token mal formado"})
    }

    try{
        const decoded = jwt.verify(token,"secret")
        const userid = decoded.id
        req.user = userid;
        next()
    }catch (e) {
        res.status(201).json({message: e.message})

    }
}

