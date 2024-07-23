import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Fullname:{
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
}, { timestamps: true });

export  const User = mongoose.model("User", userSchema);

//export default User;