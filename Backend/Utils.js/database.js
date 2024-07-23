
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path:"../.env"
})


const Database = () =>{
    mongoose.connect(process.env.Mongo_URL).then(()=>{
        console.log("mongoDB connected succesfully");
       }).catch((error)=>{
            console.log("Error");
       });
  
}

export default Database;