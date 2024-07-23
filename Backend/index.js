// making the server

import express from "express";
import dotenv from "dotenv";
//import database from "./Utils.js/database.js";
import cookieParser from "cookie-parser";
import Database from "./Utils.js/database.js";
import userRoute from "./route/userRoute.js";
 dotenv.config({
     path: ".env"
 })


Database();
const app  = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res)=>{
//     res.status(200).json({
//         message:"Welcome to the server",
//         success:true
//     })
// })

// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
// }
// app.use(cors());

// api 
app.use("/api/v1/user",userRoute)

app.listen(process.env.PORT,() => {
    console.log(`listen at port ${process.env.PORT}`);
});
