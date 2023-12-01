import dotenv from "dotenv";
import jwt  from "jsonwebtoken";
import UserModel from "../models/UserModel";

dotenv.config()
export const checkIsAdmin = async (req,res, next) => {
    try{
        const token = req.headers?.authorization.split("")[1];
        const decode =jwt.verify(token, process.env.SECRET_CODE);
        if(!decode){
            return res.status(400).json({
                message:"Token error!",
            });
        }
        const checkUser = await UserModel.findById(decode._id);
        if(!checkUser){
            return res.status(400).json({
                message:"User not found",
            });
        }
        if (checkUser.role !== "admin") {
            return res.status(400).json({
                message: "you are not admin",
            });
        }
        next();
    }catch(err){
      return res.status(500).json({
        name: err.name,
        message: err. message,
      })  
    }
}