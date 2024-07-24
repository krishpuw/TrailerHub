
import { User } from "../model/userModel.js";
import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";




export const Login = async(req,res)=>{
    try{
        const {Email, Password } = req.body;
        if (!Email || !Password) {
            return res.status(401).json({
                message: "Invalid data",
                success: false
            });
        }

        const user = await User.findOne({Email});
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password!",
                success: false
            });
        }

        const match = await bcryptjs.compare(Password,user.Password);
        if(!match){
            return res.status(401).json({
                message: "Invalid Email or password!",
                success: false
            });
        

        }
        const tokenData = {
            id:user._id }
        
        const token = await jwt.sign(tokenData,"foejgpioerhfiperhfioerjfeiwjf",{expiresIn:"1h"});

        return  res.status(200).cookie("token",token).json({
            message: `Login was Successfull and Welcome Back ${user.Fullname}`,
            user,
            success: true,
        });
    }
    catch(error){
        console.log(error);
    }
}


export  const Register = async (req, res) => {
    try {
        const { Fullname, Email, Password } = req.body;
        if (!Fullname || !Email || !Password) {
            return res.status(401).json({
                message: "Invalid data",
                success: false
            });
        }
        const user = await User.findOne({Email});
        if(user){
            return res.status(401).json({
                message:"This email is already in use",
                success:false,
            })
        }

        const hashingpass = await bcryptjs.hash(Password,16);
        

        await User.create({
            Fullname,
            Email,
            Password:hashingpass
        })
        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
 
    } catch (error) {
        console.log(error);
    }
};