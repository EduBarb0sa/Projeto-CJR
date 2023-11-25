import jwt from "jsonwebtoken";

const user = {
    id:1,
    isAdmin: true,   
}

const token = jwt.sign(user, "secret")

console.log(token)

const decoded = jwt.verify(token,"secret")

console.log(decoded)