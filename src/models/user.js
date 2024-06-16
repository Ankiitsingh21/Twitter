import mongoose from "mongoose";
import Like from "./like.js";

const userSchema= new mongoose.Schema({
        email:{
                type:String,
                required:true,
                unique: true,
        },
        password:{
                type:String,
                required:true,
        },
        name:{
                type:String,
                required:true,
        }
},{timestamps: true});

const User= mongoose.model('User', userSchema);

export default User;