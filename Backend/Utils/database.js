
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path:".env"
})


const Database = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongoDB connected succesfully");
       }).catch((error)=>{
            console.log("Error");
       });
  
}

export default Database;

// import mongoose from "mongoose";
// import dotenv from "dotenv";



// dotenv.config({
//     path:"../.env"
// })


// //console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line

// const databaseConnection = () => {
//     mongoose.connect(process.env.MONGO_URI,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     }).then(()=>{
//         console.log("mongodb connected successfully");
//     }).catch((error)=>{
//         console.log(error);
//     })
// };
// export default databaseConnection;




// import mongoose from "mongoose";

// import dotenv from "dotenv";

// dotenv.config({
//     path:"/Backend.env"
// })

// const databaseConnection =()=>{
//     mongoose.connect(process.env.MONGO_URI).then(
//         ()=>{
//             console.log("mongoDB connected succefully");
//         } 
//     ).catch((error)=>{
//         console.log(error);
//     })
// }
// export default databaseConnection;