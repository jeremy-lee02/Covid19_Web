import { Jwt } from "jsonwebtoken";
require('dotenv').config()

const verifyToken = async (req,res,next) =>{
    try {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        if(token){
            const decodeData = jwt.verify(token, process.env.ACCESS_TOKEN)
            req.user = decodeData
        }else{
            return res.status(403).send("A token is required for authentication")
        }    
    } catch (error) {
        return res.status(401).send("Invalid Token")
    }
    return next()
}
module.exports =verifyToken